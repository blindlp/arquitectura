import { RoleModel } from '../domain/role.model';

// Aplicacion
export interface UserResponseDto {
    id: number;
    name: string;
}

const mappingUserDto = (role: RoleModel): UserResponseDto => ({
    id: role.id,
    name: role.name,
});

export { mappingUserDto };
