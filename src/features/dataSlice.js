import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selection: ""
}

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    selectTeam: (state, action) => {
      state.selection = "/teams/".concat(action.payload)
    },
    selectLeague: (state, action) => {
      state.selection = "/competitions/".concat(action.payload)
    }
  }
})

export const { selectTeam, selectLeague } = dataSlice.actions

export default dataSlice.reducer
