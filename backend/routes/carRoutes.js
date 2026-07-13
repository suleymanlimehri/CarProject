import express from "express";

import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";

const router = express.Router();

// Bütün maşınlar
router.get("/", getCars);

// ID-yə görə maşın
router.get("/:id", getCarById);

// Yeni maşın əlavə et
router.post("/", createCar);

// Maşını yenilə
router.put("/:id", updateCar);

// Maşını sil
router.delete("/:id", deleteCar);

export default router;