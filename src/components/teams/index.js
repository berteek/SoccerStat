import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Box, Card, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { useGetTeams, selectTeam } from "../../app/repository"

export default function Teams() {
  const { data, status } = useGetTeams()
  const dispatch = useDispatch()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>Error</div>
  }

  const mapper = (team) => {
    return (
      <Box component={Link} to="/matches">
        <Card
          onClick={() => selectTeam(dispatch, team.id)}
          sx={{
            backgroundColor: "primary.main",
            padding: 2,
            height: 100
          }}
        >
          <Typography>{team.name}</Typography>
        </Card>
      </Box>
    )
  }

  return (
    <GridWithSearchAndPagination
      mapper={mapper}
      items={data.teams}
      searchLabel="Поиск по командам"
      itemsPerPage={12}
    />
  )
}
