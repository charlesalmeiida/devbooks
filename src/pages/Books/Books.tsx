import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { googleBooksApi } from '../../services/googleBooksApi'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'
import { Container, Subtitle, Title } from './Books.styles'
import { BookState as Book } from '../BookDetail'
import { Spinner } from '../../components/Spinner'

interface BooksSate {
  totalItems: number
  items: Book[]
}

export function Books() {
  const [books, setBooks] = useState<BooksSate | null>(null)
  const params = useSearchParams()
  const location = useLocation()

  const [searchParams] = params
  const q = searchParams.get('q')

  useEffect(() => {
    googleBooksApi
      .get(`/v1/volumes?q=${q}&maxResults=20`)
      .then((response) => setBooks(response.data))
  }, [q])

  if (!q) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return (
    <Container>
      <h1>Exibir resultados dos livros</h1>

      {books ? (
        <ul>
          {books.items.map((books) => (
            <Link to={`/books/${books.id}`}>
              <li key={books.id}>
                <Thumbnail
                  thumbnail={books.volumeInfo.imageLinks?.thumbnail}
                  title={books.volumeInfo.title}
                  bgColor="#d9d9d9"
                />

                <Title>{books.volumeInfo.title}</Title>
                <Subtitle>{books.volumeInfo.subtitle}</Subtitle>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}
