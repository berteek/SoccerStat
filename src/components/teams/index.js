import React from "react"
import { Link } from "react-router-dom"

import { Box, Card, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { useMatches } from "../../app/repository"

export default function Teams() {
  const items = useMatches()

  const mapper = (item) => {
    return (
      <Box component={Link} to="/matches">
        <Card
          sx={{
            backgroundColor: "primary.main",
            padding: 2,
            height: 100
          }}
        >
          <Typography>{item.homeTeam}</Typography>
        </Card>
      </Box>
    )
  }

  return (
    <GridWithSearchAndPagination
      mapper={mapper}
      items={items}
      searchLabel="Поиск по командам"
      itemsPerPage={12}
    />
  )
}
