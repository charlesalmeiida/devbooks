import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { SignIn } from './pages/Auth/SignIn'
import { SignUp } from './pages/Auth/SignUp'
import { AuthProvider } from './context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
            </Routes>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
