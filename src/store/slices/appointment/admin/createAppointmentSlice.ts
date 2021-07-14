import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../../api'
import { AppointmentProps } from '../../../../types'
import { FULFILLED, PENDING, REJECTED } from '../../../constants/status'
import { APPOINTMENT_REGISTRANT } from '../../../constants/types'

interface CreateAppointmentSlice {
  data: AppointmentProps
  message: string
  status: string
}

const initialState: CreateAppointmentSlice = {
  data: {} as AppointmentProps,
  message: '',
  status: PENDING,
}

export const createAppointment = createAsyncThunk(
  APPOINTMENT_REGISTRANT,
  async ({
    doctor,
    description,
    capacity,
    token,
  }: {
    doctor: string
    description: string
    capacity: number
    token: string
  }) => {
    const response = await api.post(`/appointment/`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        doctor,
        description,
        capacity,
      },
    })
    return response.data
  }
)

const deleteAppointmentSlice = createSlice({
  name: APPOINTMENT_REGISTRANT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createAppointment.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(createAppointment.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(createAppointment.fulfilled, (state, { payload }) => {
        state.message = payload.message
        state.status = FULFILLED
      })
  },
})

export default deleteAppointmentSlice.reducer
