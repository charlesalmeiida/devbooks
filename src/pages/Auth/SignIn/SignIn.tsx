import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Link } from '../../../components/Link'
import { Logo } from '../../../components/Logo'

export function SighnIn() {
  return (
    <div style={{ width: 600 }}>
      <Logo />
      <h1>Faça seu login</h1>
      <p>
        Não tem uma conta?{' '}
        <Link to={'/'} color="primary">
          Cadastre-se
        </Link>
      </p>
      <Input id="email" label="Email" type="email" />
      <Input id="password" label="Senha" type="password" />
      <Button>Entrar</Button>
    </div>
  )
}
