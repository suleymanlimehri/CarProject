import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "AZN",
    },

    color: {
      type: String,
      required: true,
    },

    mileage: {
      type: Number,
      default: 0,
    },

    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Hybrid", "Electric"],
      required: true,
    },

    transmission: {
      type: String,
      enum: ["Automatic", "Manual", "CVT"],
      required: true,
    },

    drivetrain: {
      type: String,
      enum: ["FWD", "RWD", "AWD", "4WD"],
      default: "FWD",
    },

    bodyType: {
      type: String,
      enum: [
        "Sedan",
        "SUV",
        "Coupe",
        "Hatchback",
        "Pickup",
        "Convertible",
      ],
      required: true,
    },

    engine: {
      type: String,
      required: true,
    },

    engineVolume: {
      type: Number,
    },

    horsepower: {
      type: Number,
    },

    torque: {
      type: Number,
    },

    topSpeed: {
      type: Number,
    },

    acceleration: {
      type: String,
    },

    seats: {
      type: Number,
      default: 5,
    },

    doors: {
      type: Number,
      default: 4,
    },

    condition: {
      type: String,
      enum: ["New", "Used"],
      default: "Used",
    },

    owners: {
      type: Number,
      default: 1,
    },

    city: {
      type: String,
      default: "Baku",
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    features: [
      {
        type: String,
      },
    ],

    sellerName: {
      type: String,
      default: "Auto Salon",
    },

    sellerPhone: {
      type: String,
      default: "",
    },

    sellerEmail: {
      type: String,
      default: "",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isSold: {
      type: Boolean,
      default: false,
    },

    stock: {
      type: Number,
      default: 1,
    },

    views: {
      type: Number,
      default: 0,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

export default Car;