<<<<<<< HEAD
import { Entity } from 'typeorm';
import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

export class UserUseCase extends UseCaseRepository<UserModel, UserRepository> {
    //OperationRepository<UserModel>
    constructor(public operation: UserRepository) {
        super(operation);
    }

    async insertCipher(entity: UserModel) {
        entity.password = await UserService.cryptPassword(entity.password);
        entity.refreshTocken = UserService.generateRefreshToken();
        return this.operation.insertCipher(entity);
    }
=======
import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { UserModel } from '../domain/user.model';

export class UserUseCase extends UseCaseRepository<
    UserModel,
    OperationRepository<UserModel>
> {
    constructor(public operation: OperationRepository<UserModel>) {
        super(operation);
    }
>>>>>>> f59dfcd0da8a263f52aee8c292882316877dee9b
}
