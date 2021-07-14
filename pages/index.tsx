import Navbar from '../src/components/common/Navbar'
import LoginForm from '../src/components/pages/Login'
import { useAppDispatch, useAppSelector } from '../src/store/hooks'

const Login = () => {
  const inputs = [
    {
      type: 'email',
      name: 'email',
    },
    {
      type: 'password',
      name: 'password',
    },
  ]

  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  )
}

export default Login
