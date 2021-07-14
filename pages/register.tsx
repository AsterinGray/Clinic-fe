import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import { FULFILLED } from '../src/store/constants/status'
import { useAppDispatch, useAppSelector } from '../src/store/hooks'
import { register } from '../src/store/slices/registerSlice'

const Login = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.register)

  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (state.status === FULFILLED) {
      router.replace('/login')
    }
  }, [state, router])

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
    <form action="" method="get" onSubmit={(e) => onFormSubmit(e)}>
      <input
        type="text"
        name="first_name"
        placeholder="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="last_name"
        placeholder="last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
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
