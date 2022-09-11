import React from "react"

import { Card, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { League } from "./League"

export default function Leagues() {
  const items = [
    new League("League one", "Russia"),
    new League("League two", "Australia"),
    new League("League three", "Norway"),
    new League("League four", "Turkey"),
    new League("League five", "Brazil"),
    new League("League six", "China"),
    new League("League seven", "Japan"),
    new League("League eight", "Germany"),
    new League("League nine", "India"),
    new League("League ten", "UK"),
    new League("League eleven", "France"),
    new League("League twelve", "Italy"),
    new League("League thirteen", "Canada"),
    new League("League fourteen", "South Korea")
  ]

  const mapper = (item) => {
    return (
      <Card
        sx={{
          backgroundColor: "primary.main",
          padding: 2,
          height: 100
        }}
      >
        <Typography>{item.name}</Typography>
        <Typography>{item.country}</Typography>
      </Card>
    )
  }

  return (
    <GridWithSearchAndPagination
      mapper={mapper}
      items={items}
      searchLabel="Поиск по лигам"
      itemsPerPage={9}
    />
  )
}
