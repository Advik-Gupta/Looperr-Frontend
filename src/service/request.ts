import client from '../utils/axios'
import { handleAPIError } from '../utils/error'

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
