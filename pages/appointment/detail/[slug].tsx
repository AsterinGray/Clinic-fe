import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../src/store/hooks'
import { getAppointmentDetail } from '../../../src/store/slices/appointment/appointmentDetailSlice'

const AppointmentDetailPage = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.appointmentDetail)

  const router = useRouter()

  const [token, setToken]: any = useState()
  const [slug, setSlug]: any = useState()

  useEffect(() => {
    setToken(localStorage.getItem('clinic_token'))

    if (token === '') {
      router.replace('/')
    } else {
      setSlug(router.query.slug)
      console.log(slug)
    }
  }, [])

  useEffect(() => {
    if (token && slug) {
      dispatch(getAppointmentDetail({ token, id: slug }))
      console.log(state)
    }
  }, [token, slug])

  return (
    <div>
      <div>appointment detail page</div>
      {state && (
        <div>
          <span>{state.data.doctor}</span>
          <span>{state.data.description}</span>
          <span>{state.data.capacity}</span>
        </div>
      )}
    </div>
  )
}

export default AppointmentDetailPage
