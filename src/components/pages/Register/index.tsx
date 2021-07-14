import { useRouter } from 'next/dist/client/router'
import { FormEvent, useEffect, useState } from 'react'
import { FULFILLED } from '../../../store/constants/status'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { register } from '../../../store/slices/registerSlice'
import { Section, Card, Form, Title, Wrapper, Button } from './style'

const RegisForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.login)

  const route = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (state.status === FULFILLED) {
      route.replace('/login')
    }
  }, [state, route])

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      register({
        first_name: firstName,
        last_name: lastName,
        age,
        username,
        email,
        password,
      })
    )
  }

  return (
    <Section>
      <Card>
        <Title>REGISTER</Title>
        <Form onSubmit={(e) => onFormSubmit(e)}>
          <Wrapper>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              placeholder="age"
              onChange={(e) => setAge(parseInt(e.target.value))}
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Wrapper>
          <Button>
            <button type="submit">Submit</button>
          </Button>
        </Form>
      </Card>
    </Section>
  )
}

export default RegisForm
