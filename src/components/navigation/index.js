import React from "react"
import { Route, Routes } from "react-router-dom"

import Leagues from "../leagues"
import Teams from "../teams"

export default function Navigation() {
  return (
    <Routes>
      <Route path="/soccer-stat" element={<Leagues />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  )
}
