import { configureStore } from '@reduxjs/toolkit'

import loginSlice from './slices/loginSlice'
import registerSlice from './slices/registerSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
