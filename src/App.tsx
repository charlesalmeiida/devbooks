import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Search } from './pages/Search'
import { Books } from './pages/Books'
import { BookDetail } from './pages/BookDetail'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
