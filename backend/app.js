import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

import carRoutes from "./routes/carRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import {
  notFound,
  errorHandler,
} from "./middlewares/errorMiddleware.js";

dotenv.config();

// MongoDB Connection
connectDB();

const app = express();

// __dirname (ES Modules üçün)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Uploads qovluğunu public et
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Car Showroom API is running 🚗",
  });
});

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/cars", carRoutes);

// Error Middlewares
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});