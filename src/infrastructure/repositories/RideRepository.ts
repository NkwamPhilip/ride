import type { IRideRepository, RideFilters } from '../../domain/repositories/IRideRepository'
import type { Ride, Booking } from '../../domain/entities/Ride'
import type { IApiClient } from '../api/IApiClient'

export class RideRepository implements IRideRepository {
  private apiClient: IApiClient

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient
  }

  async findById(id: string): Promise<Ride | null> {
    const response = await this.apiClient.get(`/rides/${id}`)
    return response ? this.mapToRide(response) : null
  }

  async findByDriverId(driverId: string): Promise<Ride[]> {
    const response = await this.apiClient.get(`/rides/driver/${driverId}`)
    return (response || []).map((ride: any) => this.mapToRide(ride))
  }

  async findAvailableRides(filters?: RideFilters): Promise<Ride[]> {
    const params = new URLSearchParams()
    if (filters?.origin) params.append('origin', filters.origin)
    if (filters?.destination) params.append('destination', filters.destination)
    if (filters?.departureTime) params.append('departureTime', filters.departureTime.toISOString())
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString())
    if (filters?.minSeats) params.append('minSeats', filters.minSeats.toString())

    const response = await this.apiClient.get(`/rides/available?${params.toString()}`)
    return (response || []).map((ride: any) => this.mapToRide(ride))
  }

  async create(ride: Omit<Ride, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ride> {
    const response = await this.apiClient.post('/rides', ride)
    return this.mapToRide(response)
  }

  async update(id: string, updates: Partial<Ride>): Promise<Ride> {
    const response = await this.apiClient.patch(`/rides/${id}`, updates)
    return this.mapToRide(response)
  }

  async delete(id: string): Promise<void> {
    await this.apiClient.delete(`/rides/${id}`)
  }

  async createBooking(booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Promise<Booking> {
    const response = await this.apiClient.post('/bookings', booking)
    return this.mapToBooking(response)
  }

  async findBookingById(id: string): Promise<Booking | null> {
    const response = await this.apiClient.get(`/bookings/${id}`)
    return response ? this.mapToBooking(response) : null
  }

  async findBookingsByRideId(rideId: string): Promise<Booking[]> {
    const response = await this.apiClient.get(`/bookings/ride/${rideId}`)
    return (response || []).map((booking: any) => this.mapToBooking(booking))
  }

  async findBookingsByRiderId(riderId: string): Promise<Booking[]> {
    const response = await this.apiClient.get(`/bookings/rider/${riderId}`)
    return (response || []).map((booking: any) => this.mapToBooking(booking))
  }

  async updateBooking(id: string, updates: Partial<Booking>): Promise<Booking> {
    const response = await this.apiClient.patch(`/bookings/${id}`, updates)
    return this.mapToBooking(response)
  }

  private mapToRide(data: any): Ride {
    return {
      id: data.id,
      driverId: data.driverId,
      origin: data.origin,
      destination: data.destination,
      departureTime: new Date(data.departureTime),
      availableSeats: data.availableSeats,
      pricePerSeat: data.pricePerSeat,
      status: data.status,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    }
  }

  private mapToBooking(data: any): Booking {
    return {
      id: data.id,
      rideId: data.rideId,
      riderId: data.riderId,
      seats: data.seats,
      status: data.status,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    }
  }
}

