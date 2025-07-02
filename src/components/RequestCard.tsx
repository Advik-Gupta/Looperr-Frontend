import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { IRequest } from 'interface'

export function RequestCard({ request }: { request: IRequest }) {
	return (
		<Card className='w-full max-w-sm m-5'>
			<CardHeader>
				<CardTitle className='flex items-center justify-between'>
					{request.title}
				</CardTitle>
				<CardDescription>{request.description}</CardDescription>
				<Label>Requested by: NAME OF REQUESTER</Label>
			</CardHeader>
			<CardContent>
				<h3 className='font-bold'>Type:</h3>
				<Label> {request.type}</Label> <br></br>
				<h3 className='font-bold'>From:</h3>
				<Label> {request.fromLocation.description}</Label> <br></br>
				<h3 className='font-bold'>To:</h3>
				<Label> {request.toLocation.description}</Label>
			</CardContent>
			<CardContent>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{/* Row 1: Two side-by-side cards */}
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center justify-between'>
								Price
							</CardTitle>
							<CardDescription>PRICE</CardDescription>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className='flex items-center justify-between'>
								Distance
							</CardTitle>
							<CardDescription>DISTANCE</CardDescription>
						</CardHeader>
					</Card>

					{/* Row 2: Single full-width card */}
					<div className='md:col-span-2'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center justify-between'>
									Bid Limit
								</CardTitle>
								<CardDescription>BID LIMIT</CardDescription>
							</CardHeader>
						</Card>
					</div>

					{/* Row 3: Single full-width card */}
					<div className='md:col-span-2'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center justify-between'>
									Feasibility
								</CardTitle>
								<CardDescription>FEASIBILITY</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<Button type='submit' className='w-full'>
					Place Bid On Limit
				</Button>
				<Button variant='outline' className='w-full'>
					See Request
				</Button>
			</CardFooter>
		</Card>
	)
}
