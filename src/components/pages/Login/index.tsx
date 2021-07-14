import { useRouter } from 'next/dist/client/router'
import { FormEvent, useEffect, useState } from 'react'
import { FULFILLED } from '../../../store/constants/status'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { login } from '../../../store/slices/loginSlice'
import { Section, Card, Form, Title, Wrapper, Button } from './style'

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.login)

  const route = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    localStorage.setItem('clinic_token', state.data.token)

    if (state.status === FULFILLED) route.replace('/home')
  }, [state, dispatch, route])

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <Section>
      <Card>
        <Title>LOGIN</Title>
        <Form onSubmit={(e) => onFormSubmit(e)}>
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

export default LoginForm
