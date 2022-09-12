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
