import BookIcon from '../../icons/book.svg?react'
import { Container } from './logo.styles'

export function Logo() {
  return (
    <Container>
      <BookIcon />
      <span>DevBooks</span>
    </Container>
  )
}
