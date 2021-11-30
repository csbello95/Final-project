import express from "express";
import { rentalctr } from "../controllers/index.js";
const router = express.Router();

const rentalRoutes = {
  GET: "/rentals",
  GETONE: "/rentals/:id",
  CREATE: "/rentals/create",
  UPDATE: "/rentals/update/:id",
  DELETE: "/rentals/delete/:id",
};

router.get(rentalRoutes.GET, rentalctr.getAllRentals);
router.get(rentalRoutes.GETONE,rentalctr.getOneRentals);
router.post(rentalRoutes.CREATE,rentalctr.createRentals);
router.put(rentalRoutes.UPDATE,rentalctr.updateRentals); 
router.delete(rentalRoutes.DELETE,rentalctr.deleteOneRental);


export default router;