import React, { useState } from "react"
import { Link } from "react-router-dom"

import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { useGetTeams } from "../../app/repository"

export default function Teams() {
  const { data, status } = useGetTeams()

  const [teams, setTeams] = useState([])

  if (status === "loading") {
    return (
      <Typography align="center" variant="h2" marginTop={10}>
        Загрузка...
      </Typography>
    )
  }

  if (status === "error") {
    return (
      <Typography align="center" variant="h2" marginTop={10}>
        Произошла ошибка при загрузке данных!
      </Typography>
    )
  }

  if (teams.length === 0) {
    setTeams(data.teams)
  }

  const mapper = (team) => {
    return (
      <Box component={Link} to={"/matches/team/".concat(team.id.toString())}>
        <Card
          sx={{
            backgroundColor: "#333",
            height: 130
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{
                filter: "opacity(40%)"
              }}
              src={
                team.crestUrl
                  ? team.crestUrl
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg?20201103073518"
              }
              height={140}
            />
            <Typography
              sx={{
                position: "absolute",
                top: 50,
                width: "inherit",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white"
              }}
              align="center"
              variant="h5"
            >
              {team.name}
            </Typography>
          </CardActionArea>
        </Card>
      </Box>
    )
  }

  return (
    <GridWithSearchAndPagination
      mapper={mapper}
      initialItems={data.teams}
      items={teams}
      setItems={setTeams}
      searchLabel="Поиск по командам"
      itemsPerPage={24}
    />
  )
}
