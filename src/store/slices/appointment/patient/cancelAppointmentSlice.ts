import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../../constants/status'
import { APPOINTMENT_LIST } from '../../../constants/types'

interface CancelAppointmentState {
  message: string
  status: string
}

const initialState: CancelAppointmentState = {
  message: '',
  status: PENDING,
}

export const cancelAppointment = createAsyncThunk(
  APPOINTMENT_LIST,
  async ({ id, token }: { id: string; token: string }) => {
    const response = await api.post(`/appointment/${id}/cancel`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return response.data
  }
)

const cancelAppointmentSLice = createSlice({
  name: APPOINTMENT_LIST,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cancelAppointment.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(cancelAppointment.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(cancelAppointment.fulfilled, (state, { payload }) => {
        state.message = payload.message
        state.status = FULFILLED
      })
  },
})

export default cancelAppointmentSLice.reducer
