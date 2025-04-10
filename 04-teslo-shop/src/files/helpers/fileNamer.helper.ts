import { v7 as uuidv7 } from 'uuid'

export const fileNamer = (req: Express.Request, file: Express.Multer.File, cb: Function) => {

  if (!file) return cb(new Error('File is empty'), false)

    const fileExtensions = file.mimetype.split('/')[1];

    const fileName = `${uuidv7()}.${fileExtensions}`

  cb(null, fileName);
}