import { useQuery } from "react-query"

async function fetchData(filters) {
  const url = "https://api.football-data.org/v2".concat(filters)

  const response = await fetch(url, {
    headers: {
      "X-Auth-Token": process.env.REACT_APP_API_KEY
    }
  })

  return response.json()
}

export function useGetMatches(type, id) {
  let query = ""
  if (type === "league") {
    query = "/competitions/"
  } else if (type === "team") {
    query = "/teams/"
  }
  query = query.concat(id.toString(), "/matches")
  return useQuery("matches", () => fetchData(query))
}

export function useGetLeagues() {
  return useQuery("leagues", () => fetchData("/competitions"))
}

export function useGetTeams() {
  return useQuery("teams", () => fetchData("/teams"))
}
