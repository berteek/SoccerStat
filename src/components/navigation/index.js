import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Leagues from "../leagues"
import Teams from "../teams"

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/leagues" />} />
      <Route path="/soccer-stat" element={<Navigate to="/leagues" />} />
      <Route path="/leagues" element={<Leagues />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  )
}
