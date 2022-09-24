import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { Box, Button } from "@mui/material"

export default function NavbarItem(props) {
  const { to, label } = props

  const menuItemStyle = {
    textDecoration: "none",
    padding: "20px 30px",
    fontSize: "1.3em"
  }

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        width: "fit-content"
      }}
    >
      <Button color="dark" component={Link} to={to} style={menuItemStyle}>
        {label}
      </Button>
    </Box>
  )
}

NavbarItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string
}

NavbarItem.defaultProps = {
  to: "/",
  label: "NO_LABEL"
}
