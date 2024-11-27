import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { SignIn } from './pages/Auth/SignIn'
import { SignUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
