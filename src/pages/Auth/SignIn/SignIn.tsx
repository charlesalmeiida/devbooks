import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

export function SighnIn() {
  return (
    <>
      <h1>Faça seu login</h1>
      <Input id="email" label="Email" type="email" />
      <Input id="password" label="Senha" type="password" />
      <Button>Entrar</Button>
    </>
  )
}
