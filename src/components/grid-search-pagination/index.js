import React, { useState } from "react"
import PropTypes from "prop-types"

import { Box, Pagination } from "@mui/material"
import Searchbar from "../searchbar"
import CustomGrid from "../custom-grid"
import { Page } from "../custom-grid/Page"

export default function GridWithSearchAndPagination(props) {
  const { mapper, items, searchLabel, itemsPerPage } = props

  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  const numberOfPages = Math.ceil(items.length / itemsPerPage)

  const pages = Array.from(Array(numberOfPages)).map((_, index) => {
    return new Page(
      Array.from(
        items.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
      )
    )
  })

  console.log(pages[0])

  return (
    <Box sx={{ padding: 2, paddingLeft: 4 }}>
      <Searchbar label={searchLabel} />
      <CustomGrid items={pages[currentPageNumber].items} mapper={mapper} />
      <Pagination
        sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
        color="secondary"
        count={pages.length}
        onChange={(_, pageNumber) => setCurrentPageNumber(pageNumber - 1)}
      />
    </Box>
  )
}

GridWithSearchAndPagination.propTypes = {
  mapper: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  searchLabel: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.number.isRequired
}
