import { useForm, SubmitHandler } from 'react-hook-form'
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

interface SignUpForm {
  name: string
  email: string
  password: string
}

export function SignUp() {
  const { register, handleSubmit } = useForm<SignUpForm>()

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
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
            <h1>Cadastre-se de graça</h1>
            <p>
              Já tem uma conta?{' '}
              <Link to={'/'} color="secondary">
                Entrar
              </Link>
            </p>
          </Heading>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Input
                id="name"
                label="Nome completo"
                type="text"
                {...register('name')}
              />
            </InputContainer>
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

            <Button fullWidth>Cadastrar-se</Button>
          </form>
        </div>
      </FormContainer>
    </Container>
  )
}
