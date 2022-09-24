import React, { useEffect, useState } from "react"

import dayjs from "dayjs"
import "dayjs/locale/ru"

import { Box, Stack, TextField, Typography } from "@mui/material"

import { DataGrid } from "@mui/x-data-grid"

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers"

import { useGetMatches } from "../../app/repository"

function calculateRows(matches) {
  return matches.map((match, index) => {
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

    let scoreFullTime = ""
    if (match.score.fullTime.homeTeam != null) {
      scoreFullTime = match.score.fullTime.homeTeam
        .toString()
        .concat(":", match.score.fullTime.awayTeam)
    } else {
      scoreFullTime = "-:-"
    }

    let scoreExtraTime = ""
    if (match.score.extraTime.homeTeam != null) {
      scoreExtraTime = match.score.extraTime.homeTeam
        .toString()
        .concat(":", match.score.extraTime.awayTeam)
    } else {
      scoreExtraTime = "-:-"
    }

    let scorePenalties = ""
    if (match.score.penalties.homeTeam != null) {
      scorePenalties = match.score.penalties.homeTeam
        .toString()
        .concat(":", match.score.penalties.awayTeam)
    } else {
      scorePenalties = "-:-"
    }

    return {
      id: index,
      date,
      time,
      status: matchStatus,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      scoreFullTime,
      scoreExtraTime,
      scorePenalties
    }
  })
}

export default function Matches() {
  const { data, status } = useGetMatches()

  const [matches, setMatches] = useState([])
  const [rows, setRows] = useState([])

  const [dateFrom, setDateFrom] = useState(dayjs("1995-12-17T03:24:00"))
  const [dateTo, setDateTo] = useState(dayjs("1995-12-17T03:24:00"))

  useEffect(() => {
    if (matches.length !== 0) {
      setRows(calculateRows(matches))
      if (dateFrom.valueOf() === dayjs("1995-12-17T03:24:00").valueOf()) {
        setDateFrom(dayjs(matches[0].utcDate))
        setDateTo(dayjs(matches[matches.length - 1].utcDate))
      }
    }
  }, [matches])

  if (status === "loading") {
    return (
      <Typography align="center" variant="h2" marginTop={10}>
        Загрузка...
      </Typography>
    )
  }

  if (status === "error") {
    return (
      <Typography align="center" variant="h2" marginTop={10}>
        Произошла ошибка при загрузке данных!
      </Typography>
    )
  }

  if (!data.matches) {
    return (
      <Typography align="center" variant="h2" marginTop={10}>
        Нет достпуных матчей!
      </Typography>
    )
  }

  if (matches.length === 0) {
    setMatches(data.matches)
  }

  const columns = [
    {
      field: "date",
      minWidth: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Дата"
    },
    {
      field: "time",
      minWidth: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Время"
    },
    {
      field: "status",
      minWidth: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Статус матча"
    },
    {
      field: "homeTeam",
      minWidth: 160,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Домашняя команда"
    },
    {
      field: "awayTeam",
      minWidth: 160,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Гостевая команда"
    },
    {
      field: "scoreFullTime",
      minWidth: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Основное время"
    },
    {
      field: "scoreExtraTime",
      minWidth: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Доп. время"
    },
    {
      field: "scorePenalties",
      minWidth: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      headerName: "Пенальти"
    }
  ]

  return (
    <Stack spacing={2} height="80vh" width="96vw" marginY={4} marginX="auto">
      <Typography variant="h5">Матчи</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <Typography variant="p">с</Typography>
          <DesktopDatePicker
            size="small"
            value={dateFrom}
            onChange={(newDateFrom) => {
              setDateFrom(newDateFrom)
              setMatches(
                data.matches.filter((match) => {
                  const unixTime = Date.parse(match.utcDate)
                  return (
                    unixTime >= newDateFrom.valueOf() &&
                    unixTime <= dateTo.valueOf()
                  )
                })
              )
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant="p">по</Typography>
          <DesktopDatePicker
            size="small"
            value={dateTo}
            onChange={(newDateTo) => {
              setDateTo(newDateTo)
              setMatches(
                data.matches.filter((match) => {
                  const unixTime = Date.parse(match.utcDate)
                  return (
                    unixTime <= newDateTo.valueOf() &&
                    unixTime >= dateFrom.valueOf()
                  )
                })
              )
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
      <Box
        sx={{
          height: 400,
          flex: 1,
          mx: "auto"
        }}
      >
        <DataGrid columns={columns} rows={rows} autoPageSize />
      </Box>
    </Stack>
  )
}
