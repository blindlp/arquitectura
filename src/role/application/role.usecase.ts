import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { RoleModel } from '../domain/role.model';
import { RoleRepository } from './role.repository';

export class RoleUseCase extends UseCaseRepository<RoleModel, RoleRepository> {
    //OperationRepository<UserModel>
    constructor(public operation: RoleRepository) {
        super(operation);
    }
}
