import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { Button } from "@mui/material"

export default function NavbarItem(props) {
  const { to, label } = props

  const menuItemStyle = {
    textDecoration: "none",
    color: "#000",
    padding: "10px 20px"
  }

  return (
    <Button color="secondary" component={Link} to={to} style={menuItemStyle}>
      {label}
    </Button>
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
