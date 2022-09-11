import React from "react"

import { Card, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { Team } from "./Team"

export default function Teams() {
  const items = [
    new Team("one"),
    new Team("two"),
    new Team("three"),
    new Team("four"),
    new Team("five"),
    new Team("six"),
    new Team("seven"),
    new Team("eight"),
    new Team("nine"),
    new Team("ten"),
    new Team("eleven"),
    new Team("twelve"),
    new Team("thirteen"),
    new Team("fourteen")
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
      </Card>
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
