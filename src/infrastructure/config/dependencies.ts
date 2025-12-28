import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import type { IRideRepository } from '../../domain/repositories/IRideRepository'
import { UserRepository } from '../repositories/UserRepository'
import { RideRepository } from '../repositories/RideRepository'
import { ApiClient } from '../api/ApiClient'
import { AuthService } from '../../application/services/AuthService'
import { RideService } from '../../application/services/RideService'

class DIContainer {
  private apiClient: ApiClient
  private userRepository: IUserRepository
  private rideRepository: IRideRepository
  private authService: AuthService
  private rideService: RideService

  constructor() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || ''
    this.apiClient = new ApiClient(baseUrl)

    this.userRepository = new UserRepository(this.apiClient)
    this.rideRepository = new RideRepository(this.apiClient)

    this.authService = new AuthService(this.userRepository)
    this.rideService = new RideService(this.rideRepository, this.userRepository)
  }

  getUserRepository(): IUserRepository {
    return this.userRepository
  }

  getRideRepository(): IRideRepository {
    return this.rideRepository
  }

  getAuthService(): AuthService {
    return this.authService
  }

  getRideService(): RideService {
    return this.rideService
  }

  getApiClient(): ApiClient {
    return this.apiClient
  }
}

export const container = new DIContainer()

