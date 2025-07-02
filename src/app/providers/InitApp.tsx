'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { fetchRequests } from '@/store/slices/requestsSlice'

export default function InitApp() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchRequests())
	}, [dispatch])

	return null
}
