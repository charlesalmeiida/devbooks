import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo'
import {
  Container,
  FormContainer,
  Heading,
  InputContainer,
  LogoContainer
} from '../Auth.styles'

export function SignUp() {
  return (
    <Container>
      <FormContainer>
        <div style={{ width: 600 }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Heading>
            <h1>Cadastre-se de graça</h1>
            <p>
              Já tem uma conta?{' '}
              <Link to={'/'} color="secondary">
                Entrar
              </Link>
            </p>
          </Heading>

          <InputContainer>
            <Input id="name" label="Nome completo" type="text" />
          </InputContainer>

          <InputContainer>
            <Input id="email" label="Email" type="email" />
          </InputContainer>

          <InputContainer>
            <Input id="password" label="Senha" type="password" />
          </InputContainer>

          <Button fullWidth>Cadastrar-se</Button>
        </div>
      </FormContainer>
    </Container>
  )
}
