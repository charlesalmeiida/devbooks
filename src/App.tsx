import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { SignIn } from './pages/Auth/SignIn'
import { SignUp } from './pages/Auth/SignUp'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
