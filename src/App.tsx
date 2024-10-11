import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { SighnIn } from './pages/Auth/SignIn'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SighnIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
