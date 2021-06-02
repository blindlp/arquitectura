import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

import { OperationService } from '../../shared/infraestructure/operation.service';
import { AuthRepository } from '../application/auth.repository';
import { UserModel } from '../../user/domain/user.model';

export class AuthOperation implements AuthRepository {
    async login(where: object, relations: string[]): Promise<UserModel> {
        const trace: string = OperationService.getTrace();
        const repository: Repository<User> = getRepository(User);
        const data: UserModel = await repository.findOne({
            where,
            relations,
        });
        return data;
    }
}
