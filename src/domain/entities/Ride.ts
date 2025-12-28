export interface Ride {
  id: string
  driverId: string
  origin: Location
  destination: Location
  departureTime: Date
  availableSeats: number
  pricePerSeat: number
  status: RideStatus
  createdAt: Date
  updatedAt: Date
}

export interface Location {
  address: string
  latitude: number
  longitude: number
}

export const RideStatus = {
  PUBLISHED: 'published',
  BOOKED: 'booked',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const

export type RideStatus = typeof RideStatus[keyof typeof RideStatus]

export interface Booking {
  id: string
  rideId: string
  riderId: string
  seats: number
  status: BookingStatus
  createdAt: Date
  updatedAt: Date
}

export const BookingStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  CANCELLED: 'cancelled',
} as const

export type BookingStatus = typeof BookingStatus[keyof typeof BookingStatus]

