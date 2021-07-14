import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../src/store/hooks'
import { getAppointmentList } from '../src/store/slices/appointment/appointmentListSlice'

import { getRole } from '../src/store/slices/roleSlice'
import { deleteAppointment } from '../src/store/slices/appointment/admin/deleteAppointmentSlice'
import { applyAppointment } from '../src/store/slices/appointment/patient/applyAppointmentSlice'
import Navbar from '../src/components/common/Navbar'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.appointmentList)
  const { role } = useAppSelector((state) => state.role)

  const router = useRouter()

  const [token, setToken]: any = useState()

  useEffect(() => {
    setToken(localStorage.getItem('clinic_token'))
    if (token === '') router.replace('/')
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(getAppointmentList(token))
      dispatch(getRole(token))
    }
  }, [token, dispatch, role])

  const delAppointment = (id: string) => {
    dispatch(deleteAppointment({ id, token }))
  }

  const appAppointment = (id: string) => {
    dispatch(applyAppointment({ id, token }))
  }

  return (
    <>
      <Navbar />
      <div>Home</div>

      {data.map((appointment) => {
        return (
          <div key={appointment._id}>
            <span>{appointment.doctor}</span>
            <span>{appointment.description}</span>
            <span>{appointment.capacity}</span>
            <Link href={`/appointment/detail/${appointment._id}`}>More</Link>

            {role === 'Administrator' && (
              <div onClick={() => delAppointment(appointment._id)}>Delete</div>
            )}
            {role === 'Patient' && data && (
              <div onClick={() => appAppointment(appointment._id)}>Apply</div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default Home
