import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    // eslint-disable-next-line eqeqeq, no-undef
    if (file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG OU JPEG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`);
    },
  }),
};
