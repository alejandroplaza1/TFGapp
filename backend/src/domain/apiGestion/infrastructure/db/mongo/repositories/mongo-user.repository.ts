import { UserRepository } from "../../../../domain/repositories/user.repository";
import { User } from "../../../../domain/entities/user.entity";
import { UserModel } from "../../user.schema";

export class MongoUserRepository implements UserRepository {
  async save(user: User): Promise<User> {
    const created = await UserModel.create({
      _id: user.id,
      name: user.name,
      email: user.email,
      labData: user.labData,
    });
    return new User(created._id, created.name, created.email, created.labData);
  }
}