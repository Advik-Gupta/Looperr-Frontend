import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

import { IRequest } from 'interface'

export function RequestCard({ request }: { request: IRequest }) {
	return (
		<Card className='w-full max-w-3xl mx-auto mb-6 shadow-lg rounded-2xl'>
			<CardHeader className='space-y-1'>
				<CardTitle className='text-2xl font-semibold'>
					{request?.title || 'Untitled Request'}
				</CardTitle>
				<CardDescription className='text-base'>
					{request?.description || 'No description provided'}
				</CardDescription>
				<h3>Requested by: NAME OF REQUESTER</h3>
			</CardHeader>

			<CardContent className='space-y-4'>
				<div className='flex'>
					<div className='m-2'>
						<h3 className='font-semibold'>Type</h3>
						<p>{request?.type}</p>
					</div>
					<div className='m-2'>
						<h3 className='font-semibold'>From</h3>
						<p>{request?.fromLocation?.locationName || 'N/A'}</p>
					</div>
					<div className='m-2'>
						<h3 className='font-semibold'>To</h3>
						<p>{request?.toLocation?.locationName || 'N/A'}</p>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					<div className='bg-gray-100 rounded-xl p-3'>
						<p className='text-sm text-muted-foreground'>Price</p>
						<p className='font-medium'>₹{request?.price}</p>
					</div>
					<div className='bg-gray-100 rounded-xl p-3'>
						<p className='text-sm text-muted-foreground'>Bid Limit</p>
						<p className='font-medium'>₹{request?.bidLimit}</p>
					</div>
					<div className='bg-gray-100 rounded-xl p-3'>
						<p className='text-sm text-muted-foreground'>Distance</p>
						<p className='font-medium'>-</p>
					</div>
					<div className='bg-gray-100 rounded-xl p-3'>
						<p className='text-sm text-muted-foreground'>Feasibility</p>
						<p className='font-medium'>-</p>
					</div>
				</div>
			</CardContent>

			<CardFooter className='flex flex-row gap-2 mt-4'>
				<Button className='w-full'>Place Bid On Limit</Button>
				<Button variant='outline' className='w-full'>
					See Request
				</Button>
			</CardFooter>
		</Card>
	)
}
