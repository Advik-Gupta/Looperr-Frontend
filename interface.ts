export interface IRequest {
	_id?: string
	title: string
	description: string
	type: 'pickup' | 'dropoff' | 'buy' | 'custom'
	status?: 'open' | 'accepted' | 'completed' | 'cancelled' | 'expired'
	requesterId: string
	fulfillerId?: string
	createdAt?: string
	acceptedAt?: string
	fulfilledAt?: string
	fromLocation: {
		locationReferenceId: string
		locationName: string
	}
	toLocation: {
		locationReferenceId: string
		locationName: string
	}
	reward?: number
	isUrgent?: boolean
	image?: string
	price?: number
	bidLimit?: number
	tags?: string[]
}

export interface INewRequest {
	_id?: string
	title: string
	description: string
	type: 'pickup' | 'dropoff' | 'buy' | 'custom'
	requesterId?: string
	createdAt?: string
	fromLocation: {
		locationReferenceId: string
		locationName: string
	}
	toLocation: {
		locationReferenceId: string
		locationName: string
	}
	isUrgent?: boolean
	images: File
	price?: number
	bidLimit?: number
}

export interface IFramework {
	value: string
	label: string
}
