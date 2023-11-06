import { AppEntryPoint } from "../pages/index"
import { AppQueryProvider } from "./provider/QueryProvider"
import { AppThemeProvider } from "./provider/theme-provider"

function App() {

  return (
    <>
      <AppThemeProvider>
        <AppQueryProvider>
          <AppEntryPoint/>
        </AppQueryProvider>
      </AppThemeProvider>
    </>
  )
}

export default App
