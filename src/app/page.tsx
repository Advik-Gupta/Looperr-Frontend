'use client'

import { useSelector } from 'react-redux'

import { CreateRequest } from '../service/request'

import { Button } from '@/components/ui/button'
import { RequestCard } from '@/components/RequestCard'
import { CreateRequestDialog } from '@/components/CreateRequestDialog'

const Index = () => {
	const requests = useSelector((state: any) => state.requests)

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='p-10 space-y-4'>
				<CreateRequestDialog />
			</div>
			<div className='p-10 space-y-4'>
				<h2 className='text-2xl font-semibold'>Requests:</h2>
				<div className='flex flex-wrap gap-4'>
					{requests.map((request: any, index: number) => (
						<div key={index}>
							<RequestCard request={request} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Index
