import { ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main:  '#2d3436',
      dark: '#2d3436'
    },
    secondary: {
      main:  '#535c68'
    },
    info: {
      main:  '#4834d4'
    },
    success: {
      main:  '#badc58',
      dark: '#6ab04c'
    },
    warning: {
      main:  '#f0932b'
    },
    error: {
      main: '#eb4d4b'
    }
  }
});



export const AppThemeProvider = ({children}) => {
  return(
   <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}