import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api'
import { FULFILLED, PENDING, REJECTED } from '../constants/status'
import { ROLE } from '../constants/types'

interface RoleState {
  role: string
  status: string
}

const initialState: RoleState = {
  role: '',
  status: PENDING,
}

export const login = createAsyncThunk(ROLE, async (token: string) => {
  const response = await api.get('/role', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  return response.data
})

const loginSlice = createSlice({
  name: ROLE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(login.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(login.fulfilled, (state, { payload }) => {
        state.role = payload
        state.status = FULFILLED
      })
  },
})

export default loginSlice.reducer
