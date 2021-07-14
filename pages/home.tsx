import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../src/store/hooks'
import { getAppointmentList } from '../src/store/slices/appointment/appointmentListSlice'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.appointmentList)

  const router = useRouter()

  const [token, setToken]: any = useState()

  useEffect(() => {
    setToken(localStorage.getItem('clinic_token'))

    if (token === '') {
      router.replace('/')
    }
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(getAppointmentList(token))
      console.log(state)
    }
  }, [token])

  return (
    <>
      <div>Home</div>

      {state.data.map((appointment) => {
        return (
          <div key={appointment._id}>
            <span>{appointment.doctor}</span>
            <span>{appointment.description}</span>
            <span>{appointment.capacity}</span>
          </div>
        )
      })}
    </>
  )
}

export default Home
