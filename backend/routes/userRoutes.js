import express from "express";

import {
  getUsers,
  getUserById,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Bütün istifadəçilər
router.get("/", getUsers);

// ID-yə görə istifadəçi
router.get("/:id", getUserById);

// İstifadəçini sil
router.delete("/:id", deleteUser);

export default router;