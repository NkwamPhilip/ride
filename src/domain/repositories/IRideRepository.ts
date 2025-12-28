import type { Ride, Booking } from '../entities/Ride'

export interface IRideRepository {
  findById(id: string): Promise<Ride | null>
  findByDriverId(driverId: string): Promise<Ride[]>
  findAvailableRides(filters?: RideFilters): Promise<Ride[]>
  create(ride: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ride>
  update(id: string, updates: Partial<Ride>): Promise<Ride>
  delete(id: string): Promise<void>
  createBooking(booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Promise<Booking>
  findBookingById(id: string): Promise<Booking | null>
  findBookingsByRideId(rideId: string): Promise<Booking[]>
  findBookingsByRiderId(riderId: string): Promise<Booking[]>
  updateBooking(id: string, updates: Partial<Booking>): Promise<Booking>
}

export interface RideFilters {
  origin?: string
  destination?: string
  departureTime?: Date
  maxPrice?: number
  minSeats?: number
}

