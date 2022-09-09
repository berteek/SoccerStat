import React from "react"

import { Box, Typography } from "@mui/material"
import Searchbar from "../searchbar"
import CustomGrid from "../custom-grid"

class Item {
  constructor(text) {
    this.text = text
  }
}

export default function Leagues() {
  const items = [
    new Item("one"),
    new Item("two"),
    new Item("three"),
    new Item("four"),
    new Item("five"),
    new Item("six"),
    new Item("seven"),
    new Item("eight")
  ]

  const mapper = (item) => {
    return (
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: 2,
          height: 100
        }}
      >
        <Typography>{item.text}</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ padding: 2, paddingLeft: 4 }}>
      <Searchbar label="Поиск по лигам" />
      <CustomGrid columns={3} items={items} mapper={mapper} />
    </Box>
  )
}
