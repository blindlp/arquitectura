import { Result } from './result.interface';

export interface RepositoryBase<T> {
    list(where: object, relations: string[], order: object): Promise<Result<T>>;
    listOne(where: object, relations: string[]): Promise<Result<T>>;
    listByPage(
        page: number,
        pageSize: number,
        where: object,
        relations: string[],
        order: object
    ): Promise<Result<T>>;
<<<<<<< HEAD
    insert(entity: Partial<T>): Promise<Result<T>>;
    update(entity: T, where: object, relations: string[]): Promise<Result<T>>;
    remove(where: Object): Promise<Result<T>>;
=======
    insert(entity: T): Promise<Result<T>>;
    update(entity: T, where: object, relations: string[]): Promise<Result<T>>;
    remove(entity: T): Promise<Result<T>>;
>>>>>>> f59dfcd0da8a263f52aee8c292882316877dee9b
}
