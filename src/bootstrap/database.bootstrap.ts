import yenv from 'yenv'
import { createConnection} from 'typeorm'

export interface IDataBaseBootStrap {
    initialize(): Promise<any>
    getConnection(): any
}

const env = yenv()

let client: any

export class DatabaseBootStrap implements IDataBaseBootStrap {
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
                syncronize: env.DATABASE.MYSQL.SYNCRHONIZE
            }

            createConnection(parametersConnection).then(
                connection => {
                    console.log("Connected to database")
                    client = connection;
                    resolve(true)
                },
                error => reject(error)
            );
        });

        await promise;

    }
    getConnection() {
        return client;
    }

}