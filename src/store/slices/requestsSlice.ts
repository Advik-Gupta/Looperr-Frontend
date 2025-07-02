import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IRequest } from 'interface'

import { FetchRequests } from '@/service/request'

export const fetchRequests = createAsyncThunk(
	'requests/fetchRequests',
	async () => {
		const response = await FetchRequests()
		return response as IRequest[]
	},
)

const initialState: IRequest[] = []

const requestsSlice = createSlice({
	name: 'request',
	initialState,
	reducers: {
		setRequests: (state, action) => {
			state.push(action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRequests.pending, (state) => {
				// Optionally handle loading state
			})
			.addCase(fetchRequests.fulfilled, (state, action) => {
				return action.payload // Replace state with fetched requests
			})
			.addCase(fetchRequests.rejected, (state, action) => {
				console.error('Failed to fetch requests:', action.error.message)
			})
	},
})

export const { setRequests } = requestsSlice.actions
export default requestsSlice.reducer
