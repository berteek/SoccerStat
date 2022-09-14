import React from "react"

import Navigation from "./components/navigation"
import Navbar from "./components/navbar"
import { useGetMatches } from "./app/repository"

function App() {
  const { data, status } = useGetMatches("CL")

  if (status === "loading") return <div>Loading...</div>

  if (status === "error") return <div>Error</div>

  console.log(data)

  return (
    <>
      <Navbar />
      <Navigation />
    </>
  )
}

export default App
