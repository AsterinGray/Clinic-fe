import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../../api'
import { AppointmentProps } from '../../../../types'
import { FULFILLED, PENDING, REJECTED } from '../../../constants/status'
import { APPOINTMENT_REGISTRANT } from '../../../constants/types'

interface UpdateAppointment {
  data: AppointmentProps
  message: string
  status: string
}

const initialState: UpdateAppointment = {
  data: {} as AppointmentProps,
  message: '',
  status: PENDING,
}

export const updateAppointment = createAsyncThunk(
  APPOINTMENT_REGISTRANT,
  async ({
    doctor,
    description,
    capacity,
    token,
    id,
  }: {
    doctor: string
    description: string
    capacity: number
    token: string
    id: string
  }) => {
    const response = await api.patch(`/appointment/${id}`, {
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

const updateAppointmentSlice = createSlice({
  name: APPOINTMENT_REGISTRANT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateAppointment.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(updateAppointment.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(updateAppointment.fulfilled, (state, { payload }) => {
        state.data = payload.data
        state.message = payload.message
        state.status = FULFILLED
      })
  },
})

export default updateAppointmentSlice.reducer
