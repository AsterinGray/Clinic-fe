import { configureStore } from '@reduxjs/toolkit'

import registerSlice from './slices/registerSlice'
import loginSlice from './slices/loginSlice'
import roleSlice from './slices/roleSlice'

import appointmentListSlice from './slices/appointment/appointmentListSlice'
import applyAppointmentSlice from './slices/appointment/patient/applyAppointmentSlice'
import cancelAppointmentSlice from './slices/appointment/patient/cancelAppointmentSlice'
import appointmentDetailSlice from './slices/appointment/appointmentDetailSlice'
import createAppointmentSlice from './slices/appointment/admin/createAppointmentSlice'
import updateAppointmentSlice from './slices/appointment/admin/updateAppointmentSlice'
import deleteAppointmentSlice from './slices/appointment/admin/deleteAppointmentSlice'
import AppointmentRegistrantSlice from './slices/appointment/admin/AppointmentRegistrantSlice'

export const store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    role: roleSlice,

    appointmentList: appointmentListSlice,
    appointmentDetail: appointmentDetailSlice,

    appointmentCreate: createAppointmentSlice,
    appointmentUpdate: updateAppointmentSlice,
    appointmentDelete: deleteAppointmentSlice,
    appointmentRegistrant: AppointmentRegistrantSlice,

    applyAppointment: applyAppointmentSlice,
    cancelAppointment: cancelAppointmentSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
