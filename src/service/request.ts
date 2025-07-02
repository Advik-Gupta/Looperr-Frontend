import client from '../utils/axios'
import { handleAPIError } from '../utils/error'

import { IRequest } from 'interface'

export async function FetchRequests() {
	try {
		const res = await client.get('/api/requests')
		return res.data.requests as IRequest[]
	} catch (e) {
		throw handleAPIError(e)
	}
}

export async function CreateRequest(name: string) {
	try {
		const res = await client.post('/api/requests', {
			name,
		})
		return res.data
	} catch (e) {
		throw handleAPIError(e)
	}
}
