import type { IUserRepository } from '../../domain/repositories/IUserRepository'
import { RegisterUserUseCase } from '../use-cases/auth/RegisterUserUseCase'

export class AuthService {
  private registerUserUseCase: RegisterUserUseCase

  constructor(userRepository: IUserRepository) {
    this.registerUserUseCase = new RegisterUserUseCase(userRepository)
  }

  async register(userData: {
    phoneNumber: string
    email?: string
    name: string
    role: 'rider' | 'driver'
  }) {
    return this.registerUserUseCase.execute(userData)
  }
}

