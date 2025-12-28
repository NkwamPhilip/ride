import type { IRideRepository } from '../../../domain/repositories/IRideRepository'
import type { IUserRepository } from '../../../domain/repositories/IUserRepository'
import type { Booking } from '../../../domain/entities/Ride'
import { BookingStatus } from '../../../domain/entities/Ride'

export class BookRideUseCase {
  private rideRepository: IRideRepository
  private userRepository: IUserRepository

  constructor(
    rideRepository: IRideRepository,
    userRepository: IUserRepository
  ) {
    this.rideRepository = rideRepository
    this.userRepository = userRepository
  }

  async execute(
    riderId: string,
    rideId: string,
    seats: number
  ): Promise<Booking> {
    const rider = await this.userRepository.findById(riderId)
    if (!rider) {
      throw new Error('Rider not found')
    }
    if (!rider.isVerified) {
      throw new Error('Rider must be verified to book a ride')
    }
    if (rider.role !== 'rider') {
      throw new Error('Only riders can book rides')
    }

    const ride = await this.rideRepository.findById(rideId)
    if (!ride) {
      throw new Error('Ride not found')
    }

    if (seats > ride.availableSeats) {
      throw new Error('Not enough available seats')
    }

    if (ride.status !== 'published') {
      throw new Error('Ride is not available for booking')
    }

    const booking = await this.rideRepository.createBooking({
      rideId,
      riderId,
      seats,
      status: BookingStatus.PENDING,
    })

    return booking
  }
}

