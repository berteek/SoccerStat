import { createSlice } from "@reduxjs/toolkit"

const initialValues = [
  {
    id: 1,
    date: "01.02.0003",
    time: "04:05",
    status: "В процессе",
    homeTeam: "Домашние",
    awayTeam: "Гости",
    score: "6:7",
    league: "Лига",
    country: "Страна"
  },
  {
    id: 2,
    date: "08.09.0011",
    time: "12:13",
    status: "В процессе",
    homeTeam: "Домашние",
    awayTeam: "Гости",
    score: "14:15",
    league: "Лига",
    country: "Страна"
  }
]

const initialState = {
  value: initialValues,
  filteredValue: []
}

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches: (state, action) => {
      state.value = action.payload
    },
    filterMatches: (state, action) => {
      state.filteredValue = state.value.filter(action.payload)
    }
  }
})

export const { setMatches, filterMatches } = matchesSlice.actions

export default matchesSlice.reducer
