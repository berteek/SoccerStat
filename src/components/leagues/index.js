import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { useGetLeagues, selectLeague } from "../../app/repository"

export default function Leagues() {
  const { data, status } = useGetLeagues()
  const dispatch = useDispatch()

  const [leagues, setLeagues] = useState([])

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

  if (leagues.length === 0) {
    setLeagues(data.competitions)
  }

  const mapper = (league) => {
    return (
      <Box component={Link} to="/matches">
        <Card
          onClick={() => selectLeague(dispatch, league.id)}
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
                league.area.ensignUrl
                  ? league.area.ensignUrl
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg?20201103073518"
              }
              height={140}
            />
            <Typography
              sx={{
                position: "absolute",
                top: 30,
                width: "inherit",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white"
              }}
              align="center"
              variant="h5"
            >
              {league.name}
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: 70,
                left: "50%",
                transform: "translateX(-50%)",
                color: "white"
              }}
              align="center"
              variant="h6"
            >
              {league.area.name}
            </Typography>
          </CardActionArea>
        </Card>
      </Box>
    )
  }

  return (
    <GridWithSearchAndPagination
      mapper={mapper}
      initialItems={data.competitions}
      items={leagues}
      setItems={setLeagues}
      searchLabel="Поиск по лигам"
      itemsPerPage={24}
    />
  )
}
