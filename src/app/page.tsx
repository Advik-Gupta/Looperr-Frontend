'use client'

import { CreateRequest } from '../service/request'

import { Button } from '@/components/ui/button'

const Index = () => {
	const handleClick = async () => {
		const request = await CreateRequest('advik')
		console.log(request)
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='p-10 bg-red-100 text-red-800 font-bold'>
				Tailwind works
			</div>
			<h1 className='text-4xl font-bold mb-4'>Welcome to the App</h1>
			<p className='text-lg text-gray-700'>This is the home page.</p>
			<div className='p-10 space-y-4'>
				<Button onClick={handleClick}>Create new request</Button>
			</div>
		</div>
	)
}

export default Index
