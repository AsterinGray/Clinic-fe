import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api'
import { UserProps } from '../../types'
import { FULFILLED, PENDING, REJECTED } from '../constants/status'
import { REGISTER } from '../constants/types'

interface RegisterState {
  user: UserProps
  status: string
}

const initialState: RegisterState = {
  user: {} as UserProps,
  status: PENDING,
}

export const register = createAsyncThunk(
  REGISTER,
  async ({
    first_name,
    last_name,
    age,
    username,
    email,
    password,
  }: UserProps) => {
    const response = await api.post('/register', {
      first_name,
      last_name,
      age,
      username,
      email,
      password,
    })
    return response.data
  }
)

const registerSlice = createSlice({
  name: REGISTER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, { payload }) => {
      state.status = PENDING
    }),
      builder.addCase(register.rejected, (state, { payload }) => {
        state.status = REJECTED
      }),
      builder.addCase(register.fulfilled, (state, { payload }) => {
        state.status = FULFILLED
        state.user = { ...payload }
      })
  },
})

export default registerSlice.reducer
