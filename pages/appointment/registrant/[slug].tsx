import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../src/store/hooks'
import { getAppointmentRegistrant } from '../../../src/store/slices/appointment/admin/AppointmentRegistrantSlice'

const AppointmentRegistrant = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.appointmentRegistrant)

  const router = useRouter()

  const [token, setToken]: any = useState()
  const [slug, setSlug]: any = useState()

  useEffect(() => {
    setToken(localStorage.getItem('clinic_token'))

    if (token === '') {
      router.replace('/')
    }
  }, [])

  useEffect(() => {
    setSlug(router.query.slug)
    console.log(slug)
    if (token && slug) {
      dispatch(getAppointmentRegistrant({ token, id: slug }))
      console.log(state)
    }
  }, [token, slug, router])

  return (
    <div>
      <div>appointment Registrant</div>
      {state &&
        state.data.map((registrant) => {
          return (
            <div key={registrant._id}>
              <span>{registrant.first_name}</span>
              <span>{registrant.last_name}</span>
              <span>{registrant.age}</span>
              <span>{registrant.username}</span>
            </div>
          )
        })}
    </div>
  )
}

export default AppointmentRegistrant
