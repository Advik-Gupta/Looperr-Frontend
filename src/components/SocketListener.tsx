'use client'

import { useEffect } from 'react'
import socket from '../lib/socket'
import { useDispatch } from 'react-redux'
import { setRequests } from '@/store/slices/requestsSlice'

export default function SocketListener() {
	const dispatch = useDispatch()

	useEffect(() => {
		socket.on('connect', () => {
			console.log('🔌 Connected to socket.io:', socket.id)
		})

		socket.on('requestsUpdated', (data) => {
			console.log('📦 Got requests from socket:', data)
			dispatch(setRequests(data))
		})

		return () => {
			socket.off('requestsUpdated')
			socket.off('connect')
		}
	}, [dispatch])

	return null
}
