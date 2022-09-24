import React from "react"

import { Box } from "@mui/material"

import Navigation from "./components/navigation"
import Navbar from "./components/navbar"

function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Navigation />
    </Box>
  )
}

export default App
