import React, { useState } from "react"

import { Box, Card, Pagination, Typography } from "@mui/material"
import Searchbar from "../searchbar"
import CustomGrid from "../custom-grid"
import { Item } from "../custom-grid/Item"
import { Page } from "../custom-grid/Page"

export default function Leagues() {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  const items = [
    new Item("one"),
    new Item("two"),
    new Item("three"),
    new Item("four"),
    new Item("five"),
    new Item("six"),
    new Item("seven"),
    new Item("eight"),
    new Item("nine"),
    new Item("ten"),
    new Item("eleven"),
    new Item("twelve"),
    new Item("thirteen"),
    new Item("fourteen")
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
        <Typography>{item.text}</Typography>
      </Card>
    )
  }

  const maxItemsOnPage = 9
  const numberOfPages = Math.ceil(items.length / maxItemsOnPage)

  const pages = Array.from(Array(numberOfPages)).map((_, index) => {
    return new Page(
      Array.from(
        items.slice(
          index * maxItemsOnPage,
          index * maxItemsOnPage + maxItemsOnPage
        )
      )
    )
  })

  console.log(pages[0])

  return (
    <Box sx={{ padding: 2, paddingLeft: 4 }}>
      <Searchbar label="Поиск по лигам" />
      <CustomGrid items={pages[currentPageNumber].items} mapper={mapper} />
      <Pagination
        sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
        color="secondary"
        count={pages.length}
        onChange={(_, pageNumber) => setCurrentPageNumber(pageNumber - 1)}
      />
    </Box>
  )
}
