import React from "react"

import { Box } from "@mui/material"

import NavbarItem from "./navbar-item"

export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.main",
        paddingLeft: "70px",
        gap: 3
      }}
    >
      <NavbarItem to="/leagues" label="Лиги" />
      <NavbarItem to="/teams" label="Команды" />
    </Box>
  )
}
