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
		lat: number
		lng: number
		description: string
	}
	toLocation: {
		lat: number
		lng: number
		description: string
	}
	reward?: number
	isUrgent?: boolean
	images?: string[]
	tags?: string[]
}
