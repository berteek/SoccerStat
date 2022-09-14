import React from "react"
import ReactDOM from "react-dom/client"

import { QueryClientProvider, QueryClient } from "react-query"

import { Provider } from "react-redux"

import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from "@mui/material"
import { getMainTheme } from "./themes"

import { store } from "./app/store"

import App from "./App"

const theme = getMainTheme()

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)