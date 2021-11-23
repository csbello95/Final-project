import express from "express";
import { carctr } from "../controllers/index.js";

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
router.post(carsRoutes.CREATE, carctr.create);
router.put(carsRoutes.UPDATE, carctr.update); 
router.delete(carsRoutes.DELETE,carctr.deleteOne);



export default router;

