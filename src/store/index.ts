import { configureStore } from '@reduxjs/toolkit'
import requestsReducer from './slices/requestsSlice'

const store = configureStore({
	reducer: {
		requests: requestsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
