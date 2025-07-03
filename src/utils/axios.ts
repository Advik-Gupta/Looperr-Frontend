import axios from 'axios'

if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
	throw new Error('Missing BACKEND_URL environment variable')
}

const client = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
	withCredentials: true,
})

export default client
