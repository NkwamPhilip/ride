import type { IRideRepository } from '../../../domain/repositories/IRideRepository'
import type { IUserRepository } from '../../../domain/repositories/IUserRepository'
import type { Ride } from '../../../domain/entities/Ride'
import { RideStatus } from '../../../domain/entities/Ride'

export class CreateRideUseCase {
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
    driverId: string,
    rideData: {
      origin: { address: string; latitude: number; longitude: number }
      destination: { address: string; latitude: number; longitude: number }
      departureTime: Date
      availableSeats: number
      pricePerSeat: number
    }
  ): Promise<Ride> {
    const driver = await this.userRepository.findById(driverId)
    if (!driver) {
      throw new Error('Driver not found')
    }
    if (!driver.isVerified) {
      throw new Error('Driver must be verified to create a ride')
    }
    if (driver.role !== 'driver') {
      throw new Error('Only drivers can create rides')
    }

    if (rideData.availableSeats <= 0) {
      throw new Error('Available seats must be greater than 0')
    }
    if (rideData.pricePerSeat <= 0) {
      throw new Error('Price per seat must be greater than 0')
    }
    if (rideData.departureTime <= new Date()) {
      throw new Error('Departure time must be in the future')
    }

    const ride = await this.rideRepository.create({
      driverId,
      ...rideData,
      status: RideStatus.PUBLISHED,
    })

    return ride
  }
}

