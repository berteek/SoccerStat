import React from "react"

import { Box } from "@mui/material"
import Searchbar from "../searchbar"

export default function Teams() {
  return (
    <Box sx={{ padding: 2, paddingLeft: 4 }}>
      <Searchbar label="Поиск по командам" />
    </Box>
  )
}
