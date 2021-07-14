import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../../api'
import { UserProps } from '../../../../types'
import { FULFILLED, PENDING, REJECTED } from '../../../constants/status'
import { APPOINTMENT_REGISTRANT } from '../../../constants/types'

interface AppointmentRegistrantState {
  data: UserProps[]
  status: string
}

const initialState: AppointmentRegistrantState = {
  data: [],
  status: PENDING,
}

export const getAppointmentRegistrant = createAsyncThunk(
  APPOINTMENT_REGISTRANT,
  async ({ id, token }: { id: string; token: string }) => {
    const response = await api.get(`/appointment/${id}/registrant`, {
      headers: {
        Authorization: 'Bearer ' + token,
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
    builder.addCase(getAppointmentRegistrant.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(
        getAppointmentRegistrant.rejected,
        (state, { payload }) => {
          state.status = REJECTED
        }
      ),
      builder.addCase(
        getAppointmentRegistrant.fulfilled,
        (state, { payload }) => {
          state.data = payload
          state.status = FULFILLED
        }
      )
  },
})

export default deleteAppointmentSlice.reducer
