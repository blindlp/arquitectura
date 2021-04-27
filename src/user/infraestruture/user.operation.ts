import { OperationRepository } from "../../shared/infraestructure/operation.repository";
import { UserRepository } from "../application/user.repository";
import { UserModel } from "../domain/user.model";

export class UserOperation
  extends OperationRepository<UserModel>
  implements UserRepository {
  userExists(user: UserModel): UserModel {
    return user;
  }
}