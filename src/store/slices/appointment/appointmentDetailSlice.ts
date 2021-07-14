import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../api'
import { AppointmentProps } from '../../../types'
import { FULFILLED, PENDING, REJECTED } from '../../constants/status'
import { APPLY_APPOINTMENT } from '../../constants/types'

interface AppointmentDetailState {
  data: AppointmentProps
  message: string
  status: string
}

const initialState: AppointmentDetailState = {
  data: {} as AppointmentProps,
  message: '',
  status: PENDING,
}

export const getAppointmentDetail = createAsyncThunk(
  APPLY_APPOINTMENT,
  async ({ id, token }: { id: string; token: string }) => {
    const response = await api.get(`/appointment/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return response.data
  }
)

const getAppointmentSlice = createSlice({
  name: APPLY_APPOINTMENT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppointmentDetail.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(getAppointmentDetail.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(getAppointmentDetail.fulfilled, (state, { payload }) => {
        state.data = payload
        state.status = FULFILLED
      })
  },
})

export default getAppointmentSlice.reducer
