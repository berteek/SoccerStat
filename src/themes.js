import { createTheme } from "@mui/material"
import { orange } from "@mui/material/colors"

export function getMainTheme() {
  return createTheme({
    palette: {
      primary: {
        main: orange[200],
        lighter: orange[100]
      },
      secondary: {
        main: orange[300],
        darker: orange[400]
      },
      dark: {
        main: orange[800]
      }
    }
  })
}
