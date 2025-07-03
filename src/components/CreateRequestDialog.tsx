import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2Icon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Combobox } from './reusable/ComboBox'
import { Switch } from '@/components/ui/switch'

import { campusLocations } from '@/utils/constants'
import { INewRequest } from 'interface'
import { CreateRequest } from '@/service/request'

export function CreateRequestDialog() {
	const [requestData, setRequestData] = useState<INewRequest>({
		title: '',
		price: 0,
		description: '',
		type: 'pickup',
		bidLimit: 0,
		fromLocation: {
			locationReferenceId: '',
			locationName: '',
		},
		toLocation: {
			locationReferenceId: '',
			locationName: '',
		},
		images: new File([], ''),
		isUrgent: false,
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target
		setRequestData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log('Request Data:', requestData)
		CreateRequest(requestData)
			.then((response) => {
				console.log('Request created successfully:', response)
				// Optionally, reset form or close dialog
			})
			.catch((error) => {
				console.error('Error creating request:', error)
				// Handle error appropriately
			})
		// Reset form or close dialog as needed
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[700px]'>
				<DialogHeader>
					<DialogTitle>Create a new request</DialogTitle>
					<DialogDescription>
						Fill in the details for your new request.
					</DialogDescription>
				</DialogHeader>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Title and Price side by side */}
					<div className='grid gap-3'>
						<Label htmlFor='title'>Title</Label>
						<Input id='title' name='title' onChange={handleInputChange} />
					</div>

					<div className='grid gap-3'>
						<Label htmlFor='price'>Price</Label>
						<Input
							id='price'
							name='price'
							type='number'
							onChange={handleInputChange}
						/>
					</div>

					{/* Full-width description */}
					<div className='grid gap-3 md:col-span-2'>
						<Label htmlFor='description'>Description</Label>
						<Input
							id='description'
							name='description'
							onChange={handleInputChange}
						/>
					</div>

					<div className='grid gap-3'>
						<Label htmlFor='type'>Type</Label>
						<Select
							onValueChange={(value) =>
								setRequestData((prev) => ({
									...prev,
									type: value as INewRequest['type'],
								}))
							}
						>
							<SelectTrigger id='type' name='type'>
								<SelectValue placeholder='Select type' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Request Types</SelectLabel>
									<SelectItem value='pickup'>Pickup</SelectItem>
									<SelectItem value='dropoff'>DropOff</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className='grid gap-3'>
						<Label htmlFor='bid-limit'>Bid Limit</Label>
						<Input
							id='bid-limit'
							name='bidLimit'
							type='number'
							onChange={handleInputChange}
						/>
					</div>

					{/* From and To side by side */}
					<div className='grid gap-3'>
						<Label htmlFor='from'>From</Label>
						<Combobox
							framework={campusLocations}
							onChange={(value) =>
								setRequestData((prev) => ({
									...prev,
									fromLocation: {
										locationReferenceId: value,
										locationName:
											campusLocations.find((loc) => loc.value === value)
												?.label || '',
									},
								}))
							}
						/>
					</div>

					<div className='grid gap-3'>
						<Label htmlFor='to'>To</Label>
						<div className='flex items-center gap-2'>
							<Combobox
								framework={campusLocations}
								onChange={(value) =>
									setRequestData((prev) => ({
										...prev,
										toLocation: {
											locationReferenceId: value,
											locationName:
												campusLocations.find((loc) => loc.value === value)
													?.label || '',
										},
									}))
								}
							/>
							<Button type='button'>My Location</Button>
						</div>
					</div>
				</div>

				<div className='grid gap-3'>
					<div className='grid w-full  items-center gap-3'>
						<Label htmlFor='picture'>
							Picture (upload image from delivery app)
						</Label>
						<Input
							id='picture'
							type='file'
							onChange={(e) => {
								const file = e.target.files?.[0]
								if (file) {
									setRequestData((prev) => ({
										...prev,
										images: file,
									}))
								}
							}}
						/>
					</div>
				</div>

				<div className='grid'>
					<div className='flex items-center space-x-2'>
						<Switch
							id='urgent'
							checked={requestData.isUrgent}
							onCheckedChange={(checked) =>
								setRequestData((prev) => ({ ...prev, isUrgent: checked }))
							}
						/>
						<Label htmlFor='urgent'>
							Need urgently (we will let runner know this order is a priority)
						</Label>
					</div>
					{requestData.isUrgent && (
						<div className='mt-4'>
							<Alert variant='destructive'>
								<AlertTitle>
									CAUTION: This will cause higher bid rates
								</AlertTitle>
							</Alert>
						</div>
					)}
				</div>

				<DialogFooter className='mt-6'>
					<DialogClose asChild>
						<Button variant='outline'>Cancel</Button>
					</DialogClose>
					<Button type='submit' onClick={handleSubmit}>
						<DialogClose>Request</DialogClose>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
