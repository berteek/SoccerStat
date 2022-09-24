import React, { useState } from "react"
import PropTypes from "prop-types"

import { Autocomplete, Box, Pagination, TextField } from "@mui/material"
import CustomGrid from "../custom-grid"
import { Page } from "../custom-grid/Page"

export default function GridWithSearchAndPagination(props) {
  const { mapper, initialItems, items, setItems, searchLabel, itemsPerPage } =
    props

  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  const numberOfPages = Math.ceil(items.length / itemsPerPage)

  const pages = Array.from(Array(numberOfPages)).map((_, index) => {
    return new Page(
      Array.from(
        items.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
      )
    )
  })

  return (
    <Box sx={{ padding: 2, paddingLeft: 4 }}>
      <Autocomplete
        sx={{ width: 300 }}
        size="small"
        freeSolo
        onChange={(event, newValue) => {
          if (newValue) {
            const filteredItems = items.filter((item) =>
              item.name.toLowerCase().startsWith(newValue.toLowerCase())
            )
            setItems(filteredItems)
          } else {
            setItems(initialItems)
          }
        }}
        options={[]}
        renderInput={(params) => <TextField {...params} label={searchLabel} />}
      />
      <CustomGrid items={pages[currentPageNumber].items} mapper={mapper} />
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 3
        }}
        count={pages.length}
        onChange={(_, pageNumber) => setCurrentPageNumber(pageNumber - 1)}
      />
    </Box>
  )
}

GridWithSearchAndPagination.propTypes = {
  mapper: PropTypes.func.isRequired,
  initialItems: PropTypes.instanceOf(Array).isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  setItems: PropTypes.func.isRequired,
  searchLabel: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.number.isRequired
}
