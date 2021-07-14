import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../../constants/status'
import { APPLY_APPOINTMENT } from '../../../constants/types'

interface ApplyAppointmentState {
  message: string
  status: string
}

const initialState: ApplyAppointmentState = {
  message: '',
  status: PENDING,
}

export const applyAppointment = createAsyncThunk(
  APPLY_APPOINTMENT,
  async ({ id, token }: { id: string; token: string }) => {
    const response = await api.post(`/appointment/${id}/apply`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return response.data
  }
)

const applyAppointmentSlice = createSlice({
  name: APPLY_APPOINTMENT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(applyAppointment.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(applyAppointment.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(applyAppointment.fulfilled, (state, { payload }) => {
        state.message = payload.message
        state.status = FULFILLED
      })
  },
})

export default applyAppointmentSlice.reducer
