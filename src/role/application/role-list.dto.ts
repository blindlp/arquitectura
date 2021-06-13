import { number, string } from 'joi';
import { RoleModel } from '../domain/role.model';

// Aplicacion
export interface RoleResponseDto {
    id: number;
    name: string;
}

const mappingRoleDto = (role: RoleModel): RoleResponseDto => ({
    id: role.id,
    name: role.name,
});

export { mappingRoleDto };
