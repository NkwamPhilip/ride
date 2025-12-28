import type { IRideRepository } from '../../domain/repositories/IRideRepository'
import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import { CreateRideUseCase } from '../use-cases/rides/CreateRideUseCase'
import { BookRideUseCase } from '../use-cases/rides/BookRideUseCase'

export class RideService {
  private createRideUseCase: CreateRideUseCase
  private bookRideUseCase: BookRideUseCase

  constructor(
    rideRepository: IRideRepository,
    userRepository: IUserRepository
  ) {
    this.createRideUseCase = new CreateRideUseCase(rideRepository, userRepository)
    this.bookRideUseCase = new BookRideUseCase(rideRepository, userRepository)
  }

  async createRide(
    driverId: string,
    rideData: {
      origin: { address: string; latitude: number; longitude: number }
      destination: { address: string; latitude: number; longitude: number }
      departureTime: Date
      availableSeats: number
      pricePerSeat: number
    }
  ) {
    return this.createRideUseCase.execute(driverId, rideData)
  }

  async bookRide(riderId: string, rideId: string, seats: number) {
    return this.bookRideUseCase.execute(riderId, rideId, seats)
  }
}

