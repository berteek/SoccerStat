import React from "react"
import PropTypes from "prop-types"

import { Grid } from "@mui/material"

export default function CustomGrid(props) {
  const { items, mapper } = props

  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      {Array.from(items).map((value) => (
        <Grid item xs={12} sm={3} key={value.id}>
          {mapper(value)}
        </Grid>
      ))}
    </Grid>
  )
}

CustomGrid.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  mapper: PropTypes.func.isRequired
}
