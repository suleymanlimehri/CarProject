import Car from "../models/Car.js";

// Bütün maşınları gətir
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ID-yə görə maşın
export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Yeni maşın əlavə et
export const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);

    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Maşını yenilə
export const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Maşını sil
export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found",
      });
    }

    res.status(200).json({
      message: "Car deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};