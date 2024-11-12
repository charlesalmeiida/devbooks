import { SubmitHandler, useForm } from 'react-hook-form'

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

interface SignInForm {
  email: string
  password: string
}

export function SignIn() {
  const { register, handleSubmit } = useForm<SignInForm>()

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    console.log(data)
  }

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
              <Link to={'/cadastro'} color="secondary">
                Cadastre-se
              </Link>
            </p>
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Input
                id="email"
                label="Email"
                type="email"
                {...register('email')}
              />
            </InputContainer>

            <InputContainer>
              <Input
                id="password"
                label="Senha"
                type="password"
                {...register('password')}
              />
            </InputContainer>

            <Button fullWidth>Entrar</Button>
          </form>
        </div>
      </FormContainer>
    </Container>
  )
}
