import client from '../utils/axios'
import { handleAPIError } from '../utils/error'

import { IRequest } from 'interface'
import { INewRequest } from 'interface'

export async function FetchRequests() {
	try {
		const res = await client.get('/api/requests')
		return res.data.requests as IRequest[]
	} catch (e) {
		throw handleAPIError(e)
	}
}

export async function CreateRequest(request: INewRequest) {
	try {
		const res = await client.post('/api/requests', request)
		return res.data
	} catch (e) {
		throw handleAPIError(e)
	}
}
