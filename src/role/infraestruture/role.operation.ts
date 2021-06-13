import { Role } from '../../entities/role.entity';

import { OperationRepository } from '../../shared/infraestructure/operation.repository';

import { RoleRepository } from '../application/role.repository';
import { RoleModel } from '../domain/role.model';

export class RoleOperation
    extends OperationRepository<RoleModel>
    implements RoleRepository
{
    constructor() {
        super(Role);
    }
}
