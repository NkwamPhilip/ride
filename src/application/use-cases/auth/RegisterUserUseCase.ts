import type { IUserRepository } from '../../../domain/repositories/IUserRepository'
import type { User } from '../../../domain/entities/User'

export class RegisterUserUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(userData: {
    phoneNumber: string
    email?: string
    name: string
    role: 'rider' | 'driver'
  }): Promise<User> {
    const existingUser = await this.userRepository.findByPhoneNumber(userData.phoneNumber)
    if (existingUser) {
      throw new Error('User with this phone number already exists')
    }

    const user = await this.userRepository.create({
      ...userData,
      isVerified: false,
    })

    return user
  }
}

