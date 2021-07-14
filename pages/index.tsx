import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { isExpired } from 'react-jwt'
import { useAppDispatch, useAppSelector } from '../src/store/hooks'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.login)

  const router = useRouter()

  const [token, setToken]: any = useState(localStorage.getItem('clinic_token'))
  const isTokenExpired = isExpired(token)

  useEffect(() => {
    if (!state) router.replace('/login')
  }, [state, router])

  return <div>Home</div>
}

export default Home
