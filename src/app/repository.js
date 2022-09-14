import { useQuery } from "react-query"

import { useSelector, useDispatch } from "react-redux"
import { filterMatches as reduxFilterMatches } from "../features/matchesSlice"

export function useMatches() {
  return useSelector((state) => state.matches.value)
}

export function useFilteredMatches() {
  return useSelector((state) => state.matches.filteredValue)
}

export function useFilterMatches(filter) {
  const dispatch = useDispatch()
  dispatch(reduxFilterMatches(filter))
}

const fetchData = async (filters) => {
  const url = "https://api.football-data.org/v2/competitions".concat(filters)

  const response = await fetch(url, {
    headers: {
      "X-Auth-Token": "cca00f0b9f524fe197438681e537ed97"
    }
  })
  return response.json()
}

export function useGetCompetitions() {
  return useQuery("competitions", () => fetchData(""))
}

export function useGetMatches(leagueCode) {
  return useQuery("competitions", () =>
    fetchData("/".concat(leagueCode, "/matches"))
  )
}
