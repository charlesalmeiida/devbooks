import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { googleBooksApi } from '../../services/googleBooksApi'
import {
  BackButton,
  Container,
  Content,
  Description,
  SpinnerContainer,
  Subtitle,
  Title
} from './BookDetail.styles'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'
import parse from 'html-react-parser'
import ArrowLeft from '../../icons/arrow-left.svg?react'
import { Spinner } from '../../components/Spinner'

export interface BookState {
  id: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    imageLinks?: {
      thumbnail: string
    }
  }
}

export function BookDetail() {
  const [book, setBook] = useState<BookState | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const { bookId } = params

  useEffect(() => {
    googleBooksApi
      .get(`v1/volumes/${bookId}`)
      .then((response) => setBook(response.data))
  }, [bookId])

  return (
    <Container>
      {book ? (
        <>
          <BackButton onClick={handleGoBack}>
            <ArrowLeft />
          </BackButton>
          <Thumbnail
            thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            size="large"
            bgColor="#ef552b"
          />
          <Content>
            <Title>{book.volumeInfo.title}</Title>
            <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
            <Description>{parse(book.volumeInfo.description)}</Description>
          </Content>
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </Container>
  )
}
