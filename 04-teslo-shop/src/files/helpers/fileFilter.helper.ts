

export const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: Function) => {

  if (!file) return cb(new Error('File is empty'), false)

  const fileExtensions = file.mimetype.split('/')[1];
  const validExtendions = ['jpg', 'jpeg', 'png', 'gif'];

  if (validExtendions.includes(fileExtensions)){
    return cb(null, true)
  }

  cb(null, true);
}