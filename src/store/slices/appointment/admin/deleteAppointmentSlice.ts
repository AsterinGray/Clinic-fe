import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../../constants/status'
import { DELETE_APPOINTMENT } from '../../../constants/types'

interface DeleteAppointmentState {
  message: string
  status: string
}

const initialState: DeleteAppointmentState = {
  message: '',
  status: PENDING,
}

export const deleteAppointment = createAsyncThunk(
  DELETE_APPOINTMENT,
  async ({ id, token }: { id: string; token: string }) => {
    const response = await api.delete(`/appointment/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return response.data
  }
)

const deleteAppointmentSlice = createSlice({
  name: DELETE_APPOINTMENT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteAppointment.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(deleteAppointment.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(deleteAppointment.fulfilled, (state, { payload }) => {
        state.message = payload.message
        state.status = FULFILLED
      })
  },
})

export default deleteAppointmentSlice.reducer
