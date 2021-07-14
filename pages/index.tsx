import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import { FULFILLED } from '../src/store/constants/status'
import { useAppDispatch, useAppSelector } from '../src/store/hooks'
import { login } from '../src/store/slices/loginSlice'

const Login = () => {
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
    <form onSubmit={(e) => onFormSubmit(e)}>
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login
