import * as bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jwt-simple';
import moment from 'moment';
import yenv from 'yenv';
import { resolve } from 'node:path';

const env = yenv();

export class UserService {
    static async cryptPassword(password: string): Promise<string> {
        return await bcryptjs.hash(password, 10);
    }

    static async decryptPassword(
        password: string,
        passwordCipher: string
    ): Promise<boolean> {
        return await bcryptjs.compare(password, passwordCipher);
    }

    static generateAccessToken(name: string, photo: string, roles: string[]) {
        const iat = moment().unix();
        const exp = moment().add(env.TOKEN.TIMEOUT, 'seconds').unix();
        const payload = {
            name,
            photo,
            roles,
            iat,
            exp,
        };

        return jwt.encode(payload, env.JWT);
    }

    static generateRefreshToken(): string {
        return uuidv4();
    }

    static validateAccessToken(accessToken: string): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            try {
                const payload = jwt.decode(accessToken, env.JWT);
                resolve(payload);
            } catch (error) {
                if (error.message.toLowerCase() === 'token expired') {
                    reject({
                        status: 409,
                        message: 'Access Tocken expired',
                    });
                } else {
                    reject({
                        status: 401,
                        message: 'login required',
                    });
                }
            }
        });
        return promise;
    }
}
