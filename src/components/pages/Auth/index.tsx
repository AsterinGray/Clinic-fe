import InputGroup from '../../common/Input'
import { Card, Title, Form } from './style'

type Props = {
  title: string
  input: {
    name: string
    type: string
  }[]
}

const FormCard: React.FC<Props> = ({ title, input }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Form>
        {input.map((inp, idx) => {
          return <InputGroup key={idx} {...inp} />
        })}
      </Form>
    </Card>
  )
}

export default FormCard
