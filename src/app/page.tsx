'use client'

import { useSelector } from 'react-redux'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { RequestCard } from '@/components/RequestCard'
import { CreateRequestDialog } from '@/components/CreateRequestDialog'
import SocketListener from '@/components/SocketListener'

const Index = () => {
	const requests = useSelector((state: any) => state.requests)

	useEffect(() => {
		console.log('Requests:', requests)
	}, [requests])

	return (
		<>
			<SocketListener />
			<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
				<div className='p-10 space-y-4'>
					<CreateRequestDialog />
				</div>
				<div className='p-10 space-y-4'>
					<h2 className='text-2xl font-semibold'>Requests:</h2>
					<div className='flex flex-col gap-4 px-4 w-full max-w-3xl'>
						{requests.map((request: any, index: number) => (
							<div key={index}>
								<RequestCard request={request} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Index
