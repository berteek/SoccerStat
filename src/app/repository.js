import { useQuery } from "react-query"

import { useSelector } from "react-redux"
import {
  selectLeague as sliceSelectLeague,
  selectTeam as sliceSelectTeam
} from "../features/dataSlice"

async function fetchData(filters) {
  const url = "https://api.football-data.org/v2".concat(filters)

  const response = await fetch(url, {
    headers: {
      "X-Auth-Token": process.env.REACT_APP_API_KEY
    }
  })

  return response.json()
}

export function useGetMatches() {
  const selection = useSelector((state) => state.data.selection)
  return useQuery("matches", () => fetchData(selection.concat("/matches")))
}

export function selectLeague(dispatch, leagueCode) {
  dispatch(sliceSelectLeague(leagueCode))
}

export function selectTeam(dispatch, teamCode) {
  dispatch(sliceSelectTeam(teamCode))
}

export function useGetLeagues() {
  return useQuery("leagues", () => fetchData("/competitions"))
}

export function useGetTeams() {
  return useQuery("teams", () => fetchData("/teams"))
}