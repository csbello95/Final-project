import express from "express";
import { carctr } from "../controllers/index.js";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from "url"; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function dirname(meta) {
  return fileURLToPath(meta.url);
}


//configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    console.log("Filename", req.body);
    cb(null, `${req.body.car_model}.${file.mimetype.split("/")[1]}`);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();



const carsRoutes = {
    GET: "/cars",
    GETONE:"/cars/:id",
    CREATE: "/cars/create",
    UPDATE: "/cars/update/:id",
    DELETE: "/cars/delete/:id",
  };

router.get(carsRoutes.GET, carctr.getAll);
router.get(carsRoutes.GETONE,carctr.getOne);
router.post(carsRoutes.CREATE,upload.single("file"),carctr.create);
router.put(carsRoutes.UPDATE,upload.single("file"), carctr.update); 
router.delete(carsRoutes.DELETE,carctr.deleteOne);



export default router;

