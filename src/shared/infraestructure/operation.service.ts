import { v4 as uuidv4 } from 'uuid';

export class OperationService {
    static getTrace() {
        console.log('dest');
        return uuidv4();
    }
}
