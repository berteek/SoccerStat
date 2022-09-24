import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"

export function getMainTheme() {
  return createTheme({
    palette: {
      primary: {
        main: grey[600],
        lighter: grey[200]
      },
      secondary: {
        main: grey[300],
        darker: grey[400]
      },
      dark: {
        main: grey[800]
      },
      light: {
        main: grey[50]
      }
    }
  })
}
