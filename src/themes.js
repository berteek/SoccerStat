import { createTheme } from "@mui/material"
import { orange } from "@mui/material/colors"

export function getMainTheme() {
  return createTheme({
    palette: {
      primary: {
        main: orange[200]
      },
      secondary: {
        main: orange[300]
      }
    }
  })
}
