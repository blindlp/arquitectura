import yenv from 'yenv';
import { createConnection } from 'typeorm';

export interface IDatabaseBootstrap {
    initialize(): Promise<any>;
    getConnection(): any;
}

const env = yenv();

let client: any;

export class DatabaseBootstrap implements IDatabaseBootstrap {
    async initialize(): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            const parametersConnection = {
                host: env.DATABASE.MYSQL.HOST,
                type: env.DATABASE.MYSQL.TYPE,
                username: env.DATABASE.MYSQL.USERNAME,
                password: env.DATABASE.MYSQL.PASSWORD,
                database: env.DATABASE.MYSQL.DATABASE,
                port: env.DATABASE.MYSQL.PORT,
                entities: [env.DATABASE.MYSQL.ENTITIES],
                synchronize: env.DATABASE.MYSQL.SYNCHRONIZE,
            };

            createConnection(parametersConnection).then(
                (connnection) => {
                    console.log('Conneted to database');
                    client = connnection;
                    resolve(true);
                },
                (error) => {
                    console.log(error);
                    reject(error);
                }
            );
        });

        await promise;
    }
    getConnection() {
        return client;
    }
}
