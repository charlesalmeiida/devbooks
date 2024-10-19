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

export function SighnIn() {
  return (
    <Container>
      <FormContainer>
        <div style={{ width: 600 }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Heading>
            <h1>Faça seu login</h1>
            <p>
              Não tem uma conta?{' '}
              <Link to={'/'} color="secondary">
                Cadastre-se
              </Link>
            </p>
          </Heading>

          <InputContainer>
            <Input id="email" label="Email" type="email" />
          </InputContainer>

          <InputContainer>
            <Input id="password" label="Senha" type="password" />
          </InputContainer>

          <Button fullWidth>Entrar</Button>
        </div>
      </FormContainer>
    </Container>
  )
}
