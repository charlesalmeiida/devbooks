import { useEffect, useState } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { googleBooksApi } from '../../services/googleBooksApi'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'

interface Book {
  id: string
  volumeInfo: {
    title: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}
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
    <>
      <h1>Exibir resultados dos livros</h1>

      {books && (
        <ul>
          {books.items.map((books) => (
            <li key={books.id}>
              <Thumbnail
                thumbnail={books.volumeInfo.imageLinks?.thumbnail}
                title={books.volumeInfo.title}
                bgColor="#d9d9d9"
              />

              <h1>{books.volumeInfo.title}</h1>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
