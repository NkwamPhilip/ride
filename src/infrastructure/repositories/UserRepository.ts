import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import type { User, Driver, Rider } from '../../domain/entities/User'
import type { IApiClient } from '../api/IApiClient'

export class UserRepository implements IUserRepository {
  private apiClient: IApiClient

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient
  }

  async findById(id: string): Promise<User | null> {
    const response = await this.apiClient.get(`/users/${id}`)
    return response ? this.mapToUser(response) : null
  }

  async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
    const response = await this.apiClient.get(`/users/phone/${phoneNumber}`)
    return response ? this.mapToUser(response) : null
  }

  async create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const response = await this.apiClient.post('/users', user)
    return this.mapToUser(response)
  }

  async update(id: string, updates: Partial<User>): Promise<User> {
    const response = await this.apiClient.patch(`/users/${id}`, updates)
    return this.mapToUser(response)
  }

  async delete(id: string): Promise<void> {
    await this.apiClient.delete(`/users/${id}`)
  }

  async findDrivers(): Promise<Driver[]> {
    const response = await this.apiClient.get('/users/drivers')
    return (response || []).map((user: any) => this.mapToDriver(user))
  }

  async findRiders(): Promise<Rider[]> {
    const response = await this.apiClient.get('/users/riders')
    return (response || []).map((user: any) => this.mapToRider(user))
  }

  private mapToUser(data: any): User {
    return {
      id: data.id,
      phoneNumber: data.phoneNumber,
      email: data.email,
      name: data.name,
      role: data.role,
      isVerified: data.isVerified,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    }
  }

  private mapToDriver(data: any): Driver {
    return {
      ...this.mapToUser(data),
      role: 'driver',
      vehicleDetails: data.vehicleDetails,
      rating: data.rating,
      totalTrips: data.totalTrips,
    }
  }

  private mapToRider(data: any): Rider {
    return {
      ...this.mapToUser(data),
      role: 'rider',
      rating: data.rating,
      totalTrips: data.totalTrips,
    }
  }
}

