import React from "react"
import PropTypes from "prop-types"

import { TabList } from "@mui/lab"
import { Box, Tab } from "@mui/material"

export default function Tabs(props) {
  const { changeTab } = props

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <TabList onChange={changeTab}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: 80,
            height: "inherit",
            margin: 0.5
          }}
        />
        <Tab label="Лиги" value="1" />
        <Tab label="Комнады" value="2" />
      </TabList>
    </Box>
  )
}

Tabs.propTypes = {
  changeTab: PropTypes.func
}

Tabs.defaultProps = {
  changeTab: () => {}
}
