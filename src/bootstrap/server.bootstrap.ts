import {Application} from 'express';
import http from 'http';
import {AddressInfo} from 'node:net';
import yenv from 'yenv'
interface Address extends AddressInfo {
    port_: number;
}

const env = yenv()

export interface IServerBootstrap {
    initialize(): Promise<any>;
}

export class ServerBootstrap implements IServerBootstrap {
    constructor(private app: Application) {}

    initialize(): Promise<any> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);

            server
                .listen(env.PORT)
                .on('listening', () => {
                    console.log(
                        `Server is running on port ${
                            (server.address() as Address).port
                        }`
                    );
                    resolve(true);
                })
                .on('Error', (error) => console.log(error));
            reject(true);
        });
    }
}
