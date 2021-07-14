import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../api'
import { AppointmentProps } from '../../../types'
import { FULFILLED, PENDING, REJECTED } from '../../constants/status'
import { APPOINTMENT_LIST } from '../../constants/types'

interface AppointmentListState {
  data: AppointmentProps[]
  status: string
}

const initialState: AppointmentListState = {
  data: [],
  message: '',
  status: PENDING,
}

export const getAppointmentList = createAsyncThunk(
  APPOINTMENT_LIST,
  async (token: string) => {
    const response = await api.get('/appointment', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return response.data
  }
)

const appointmentListSlice = createSlice({
  name: APPOINTMENT_LIST,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppointmentList.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(getAppointmentList.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(getAppointmentList.fulfilled, (state, { payload }) => {
        state.data = payload
        state.status = FULFILLED
      })
  },
})

export default appointmentListSlice.reducer
