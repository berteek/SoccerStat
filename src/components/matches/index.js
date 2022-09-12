import React from "react"

import { Box, Stack, TextField, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useFilteredMatches } from "../../app/repository"

export default function Matches() {
  const matches = useFilteredMatches()

  const columns = [
    {
      field: "date",
      headerName: "Дата"
    },
    {
      field: "time",
      headerName: "Время"
    },
    {
      field: "status",
      headerName: "Статус матча"
    },
    {
      field: "homeTeam",
      headerName: "Домашняя команда"
    },
    {
      field: "awayTeam",
      headerName: "Гостевая команда"
    },
    {
      field: "score",
      headerName: "Счет"
    }
  ]

  return (
    <Stack spacing={2} margin={4}>
      <Typography variant="h5">Матчи</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="p">с</Typography>
        <TextField
          id="date"
          type="date"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Typography variant="p">по</Typography>
        <TextField
          id="date"
          type="date"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
        />
      </Stack>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={matches}
          pageSize={2}
          rowsPerPageOptions={[2]}
        />
      </Box>
    </Stack>
  )
}
