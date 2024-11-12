import { Container } from './input.styles'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, ...props },
  ref
) {
  return (
    <Container error={Boolean(error)}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} type="text" id={id} {...props} />
      {error && <p>{error}</p>}
    </Container>
  )
})
