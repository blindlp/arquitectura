import * as bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export class UserService {
    static async cryptPassword(password: string): Promise<string> {
        return await bcryptjs.hash(password, 10);
    }

    static generateRefreshToken(): string {
        return uuidv4();
    }
}
