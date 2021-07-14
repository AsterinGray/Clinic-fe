import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api'
import { FULFILLED, PENDING, REJECTED } from '../constants/status'
import { LOGIN } from '../constants/types'

interface LoginState {
  data: {
    token: string
  }
  status: string
}

const initialState: LoginState = {
  data: {
    token: '',
  },
  status: PENDING,
}

export const login = createAsyncThunk(
  LOGIN,
  async ({ email, password }: { email: string; password: string }) => {
    const response = await api.post('/login', {
      email: email,
      password: password,
    })
    return response.data
  }
)

const loginSlice = createSlice({
  name: LOGIN,
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
        state.data = payload
        state.status = FULFILLED
      })
  },
})

export default loginSlice.reducer
