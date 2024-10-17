import { Container } from './input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

export function Input({ id, label, error, ...props }: InputProps) {
  return (
    <Container error={Boolean(error)}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
      {error && <p>{error}</p>}
    </Container>
  )
}
