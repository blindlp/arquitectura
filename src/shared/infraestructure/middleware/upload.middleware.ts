import multer from 'multer';
import multer_s3 from 'multer-s3';
import AWS from 'aws-sdk';
import yenv from 'yenv';
import { IError } from '../../../helper/erros.handler';

const env = yenv();

AWS.config.update({ region: 'us-east-2' });

const S3 = new AWS.S3({
    accessKeyId: env.AWS.CREDENTIALS.ACCESS_KEY_ID,
    secretAccessKey: env.AWS.CREDENTIALS.SECRET_ACCESS_KEY,
});

export class Upload {
    static S3(fieldName: string, ...mimeTypeAllowed: string[]) {
        return multer({
            storage: multer_s3({
                s3: S3,
                bucket: env.AWS.BUCKET.NAME,
                acl: 'public-read',
                metadata(req, file, cb) {
                    cb(null, { filename: file.fieldname });
                },
                key(req: any, file: any, cb) {
                    const mimeType = file.mimetype;
                    const isFound = mimeTypeAllowed.includes(mimeType);
                    if (!isFound) {
                        const error: IError = new Error('File not allowed');
                        error.status = 500;
                        cb(error);
                    } else {
                        const partsFile = file.originalname.split('.');
                        const name = Date.now().toString();
                        const extension = partsFile[1];
                        const newFileName = `${name}.${extension}`;
                        req.body[fieldName] = newFileName;
                        cb(null, newFileName);
                    }
                },
            }),
        }).single(fieldName);
    }
}
