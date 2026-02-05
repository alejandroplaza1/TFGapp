import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { v4 as uuidv4 } from 'uuid'; // <--- Importación correcta


export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(name: string, email: string, labData: any): Promise<User> {
    const user = new User(uuidv4(), name, email, labData);
    return await this.userRepository.save(user);
  }
}