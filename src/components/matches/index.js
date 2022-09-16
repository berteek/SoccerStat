import React from "react"

import { Box, Stack, TextField, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useGetMatches } from "../../app/repository"

export default function Matches() {
  const { data, status } = useGetMatches()

  console.log(data)

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>Error</div>
  }

  const columns = [
    {
      field: "date",
      flex: 1,
      headerName: "Дата"
    },
    {
      field: "time",
      flex: 1,
      headerName: "Время"
    },
    {
      field: "status",
      flex: 1,
      headerName: "Статус матча"
    },
    {
      field: "homeTeam",
      flex: 1,
      headerName: "Домашняя команда"
    },
    {
      field: "awayTeam",
      flex: 1,
      headerName: "Гостевая команда"
    },
    {
      field: "score",
      flex: 1,
      headerName: "Счет"
    }
  ]

  const rows = data.matches.map((match, index) => {
    const dateTime = new Date(Date.parse(match.utcDate))
    const date = dateTime.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    })
    const time = dateTime.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    })
    let matchStatus = ""
    switch (match.status) {
      case "SCHEDULED":
        matchStatus = "Запланирован"
        break
      case "LIVE":
        matchStatus = "В прямом эфире"
        break
      case "IN_PLAY":
        matchStatus = "В игре"
        break
      case "PAUSED":
        matchStatus = "Пауза"
        break
      case "FINISHED":
        matchStatus = "Завершен"
        break
      case "POSTPONED":
        matchStatus = "Отложен"
        break
      case "SUSPENDED":
        matchStatus = "Приостановлен"
        break
      case "CANCELED":
        matchStatus = "Отменен"
        break
      default:
        break
    }
    return {
      id: index,
      date,
      time,
      status: matchStatus,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name
    }
  })

  console.log(rows)

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
          rows={rows}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </Stack>
  )
}
