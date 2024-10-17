import express from "express";
import {
  getUserPlaces,
  updateUserPlaces,
} from "../controllers/userPlacesController.js";

const router = express.Router();

router.get("/", getUserPlaces);
router.put("/", updateUserPlaces);

export default router;
