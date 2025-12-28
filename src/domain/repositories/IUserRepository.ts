import type { User, Driver, Rider } from '../entities/User'

export interface IUserRepository {
  findById(id: string): Promise<User | null>
  findByPhoneNumber(phoneNumber: string): Promise<User | null>
  create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>
  update(id: string, updates: Partial<User>): Promise<User>
  delete(id: string): Promise<void>
  findDrivers(): Promise<Driver[]>
  findRiders(): Promise<Rider[]>
}

