import { Input } from './style'

type Props = {
  name: string
  type: string
}

const InputGroup: React.FC<Props> = ({ name, type }) => {
  return (
    <Input>
      <label htmlFor="input">{name}</label>
      <input type={type} id={name} />
    </Input>
  )
}

export default InputGroup
