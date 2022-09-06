import React, { useState } from "react"

import { Box } from "@mui/material"
import { TabContext } from "@mui/lab"

import Tabs from "./components/tabs"
import Leagues from "./components/leagues"
import Teams from "./components/teams"

function App() {
  const [tab, setTab] = useState("1")

  const changeTab = (event, newTab) => {
    setTab(newTab)
  }

  return (
    <Box>
      <TabContext value={tab}>
        <Tabs changeTab={changeTab} />
        <Leagues />
        <Teams />
      </TabContext>
    </Box>
  )
}

export default App
