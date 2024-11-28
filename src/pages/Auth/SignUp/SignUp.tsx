import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import { useAuth } from '../../../hooks/useAuth'

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail é obrigatório' })
    .email({ message: 'Insira um e-mail válido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
  name: z.string().min(1, { message: 'O nome é obrigatório' })
})

type SignUpForm = z.infer<typeof validationSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpForm>({
    resolver: zodResolver(validationSchema)
  })

  const { signUp } = useAuth()

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    await signUp(data)
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
                error={errors.name?.message}
              />
            </InputContainer>
            <InputContainer>
              <Input
                id="email"
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
              />
            </InputContainer>
            <InputContainer>
              <Input
                id="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password?.message}
              />
            </InputContainer>

            <Button fullWidth>Cadastrar</Button>
          </form>
        </div>
      </FormContainer>
    </Container>
  )
}
