import React from "react"
import PropTypes from "prop-types"

import { Box, Grid, Stack } from "@mui/material"

export default function CustomGrid(props) {
  const { columns, items, mapper } = props

  return (
    <Grid container sx={{ paddingTop: 2 }}>
      <Stack spacing={2}>
        {Array.from(Array(Math.ceil(items.length / columns))).map(
          (_, index) => (
            <CustomGridRow
              items={items.slice(index * columns, index * columns + columns)}
              mapper={mapper}
            />
          )
        )}
      </Stack>
    </Grid>
  )
}

CustomGrid.propTypes = {
  columns: PropTypes.number.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  mapper: PropTypes.func.isRequired
}

function CustomGridRow(props) {
  const { items, mapper } = props

  return (
    <Box sx={{ display: "inline-flex" }}>
      <Grid container item spacing={2}>
        {Array.from(items).map((value, _) => (
          <Grid item>{mapper(value)}</Grid>
        ))}
      </Grid>
    </Box>
  )
}

CustomGridRow.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  mapper: PropTypes.func.isRequired
}
