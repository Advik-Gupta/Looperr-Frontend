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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Combobox } from './reusable/ComboBox'

export function CreateRequestDialog() {
	return (
		<Dialog>
			<form>
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
							<Input id='title' name='title' />
						</div>

						<div className='grid gap-3'>
							<Label htmlFor='price'>Price</Label>
							<Input id='price' name='price' />
						</div>

						{/* Full-width description */}
						<div className='grid gap-3 md:col-span-2'>
							<Label htmlFor='description'>Description</Label>
							<Input id='description' name='description' />
						</div>

						<div className='grid gap-3'>
							<Label htmlFor='type'>Type</Label>
							<Select>
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
							<Input id='bid-limit' name='bidLimit' />
						</div>

						{/* From and To side by side */}
						<div className='grid gap-3'>
							<Label htmlFor='from'>From</Label>
							<Combobox />
						</div>

						<div className='grid gap-3'>
							<Label htmlFor='to'>To</Label>
							<div className='flex items-center gap-2'>
								<Combobox />
								<Button type='button'>My Location</Button>
							</div>
						</div>
					</div>

					<DialogFooter className='mt-6'>
						<DialogClose asChild>
							<Button variant='outline'>Cancel</Button>
						</DialogClose>
						<DialogClose>
							<Button type='submit'>Save changes</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	)
}
