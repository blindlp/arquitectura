import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { UserRepository } from '../application/user.repository';
import { UserModel } from '../domain/user.model';
import { ResponseDto } from '../../helper/response.dto';

export class UserOperation
    extends OperationRepository<UserModel>
    implements UserRepository
{
    constructor() {
        super(User);
    }

    async insertCipher(entity: UserModel): Promise<Result<UserModel>> {
        const trace: string = OperationService.getTrace();
        const repository: Repository<User> = getRepository(User);
        const data: UserModel = await repository.save(entity);
        return ResponseDto.format(trace, data);
    }
}
