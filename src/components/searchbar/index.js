import React from "react"
import PropTypes from "prop-types"

import { Autocomplete, TextField } from "@mui/material"

export default function Searchbar(props) {
  const { label } = props

  return (
    <Autocomplete
      sx={{ width: 300 }}
      size="small"
      freeSolo
      options={[]}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

Searchbar.propTypes = {
  label: PropTypes.string
}

Searchbar.defaultProps = {
  label: "NO_LABEL"
}
