import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../src/store/hooks'
import { getAppointmentDetail } from '../../../src/store/slices/appointment/appointmentDetailSlice'

const AppointmentDetailPage = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.appointmentDetail)

  const router = useRouter()

  const [token, setToken]: any = useState()
  const [slug, setSlug]: any = useState()

  useEffect(() => {
    setToken(localStorage.getItem('clinic_token'))
    if (token === '') router.replace('/')
  }, [])

  useEffect(() => {
    setSlug(router.query.slug)
    if (token && slug) {
      dispatch(getAppointmentDetail({ token, id: slug }))
    }
  }, [token, slug, router, dispatch, data])

  return (
    <div>
      <div>appointment detail page</div>
      {data && (
        <div>
          <span>{data.doctor}</span>
          <span>{data.description}</span>
          <span>{data.capacity}</span>
        </div>
      )}
    </div>
  )
}

export default AppointmentDetailPage
