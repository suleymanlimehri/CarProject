import express from "express";
import Car from "../models/Car.js";
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        await Car.deleteMany();
        const cars = [

            {
                brand: "BMW",
                model: "M4 Competition",
                year: 2023,
                price: 95000,
                currency: "AZN",
                color: "Black",
                mileage: 12000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "RWD",
                bodyType: "Coupe",
                engine: "3.0 Turbo",
                engineVolume: 3,
                horsepower: 503,
                seats: 4,
                condition: "Used",
                city: "Baku",
                description: "BMW M4 Competition premium sport coupe",
                thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
                features: [
                    "Sport Package",
                    "Leather Interior",
                    "Parking Sensor"
                ],
                isFeatured: true
            },


            {
                brand: "Mercedes",
                model: "AMG GT",
                year: 2024,
                price: 120000,
                currency: "AZN",
                color: "Red",
                mileage: 5000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "RWD",
                bodyType: "Coupe",
                engine: "V8 Biturbo",
                engineVolume: 4,
                horsepower: 577,
                seats: 2,
                condition: "New",
                city: "Baku",
                description: "Luxury Mercedes AMG GT performance car",
                thumbnail: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
                features: [
                    "Premium Audio",
                    "Carbon Package"
                ],
                isFeatured: true
            },


            {
                brand: "Audi",
                model: "RS7 Sportback",
                year: 2024,
                price: 110000,
                currency: "AZN",
                color: "Gray",
                mileage: 3000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "AWD",
                bodyType: "Sedan",
                engine: "4.0 TFSI",
                engineVolume: 4,
                horsepower: 591,
                seats: 5,
                condition: "New",
                city: "Baku",
                description: "Audi RS7 luxury sport sedan",
                thumbnail: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
                features: [
                    "Quattro",
                    "Virtual Cockpit",
                    "Sport Seats"
                ],
                isFeatured: true
            },


            {
                brand: "Porsche",
                model: "911 Carrera",
                year: 2023,
                price: 180000,
                currency: "AZN",
                color: "White",
                mileage: 7000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "RWD",
                bodyType: "Coupe",
                engine: "3.0 Twin Turbo",
                engineVolume: 3,
                horsepower: 379,
                seats: 4,
                condition: "Used",
                city: "Baku",
                description: "Iconic Porsche 911 Carrera sports car",
                thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
                features: [
                    "Sport Chrono",
                    "Premium Interior"
                ],
                isFeatured: true
            },


            {
                brand: "Tesla",
                model: "Model S Plaid",
                year: 2024,
                price: 140000,
                currency: "AZN",
                color: "Blue",
                mileage: 2000,
                fuelType: "Electric",
                transmission: "Automatic",
                drivetrain: "AWD",
                bodyType: "Sedan",
                engine: "Dual Electric Motor",
                engineVolume: 0,
                horsepower: 1020,
                seats: 5,
                condition: "New",
                city: "Baku",
                description: "Tesla Model S Plaid electric performance sedan",
                thumbnail: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
                features: [
                    "Autopilot",
                    "Glass Roof"
                ],
                isFeatured: true
            },


            {
                brand: "Range Rover",
                model: "Sport SV",
                year: 2024,
                price: 160000,
                currency: "AZN",
                color: "Black",
                mileage: 4000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "4WD",
                bodyType: "SUV",
                engine: "4.4 Twin Turbo",
                engineVolume: 4.4,
                horsepower: 626,
                seats: 5,
                condition: "New",
                city: "Baku",
                description: "Luxury Range Rover Sport SUV",
                thumbnail: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
                features: [
                    "Air Suspension",
                    "Luxury Interior"
                ],
                isFeatured: true
            },


            {
                brand: "Lamborghini",
                model: "Huracan EVO",
                year: 2022,
                price: 250000,
                currency: "AZN",
                color: "Green",
                mileage: 8000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "AWD",
                bodyType: "Coupe",
                engine: "V10",
                engineVolume: 5.2,
                horsepower: 631,
                seats: 2,
                condition: "Used",
                city: "Baku",
                description: "Lamborghini Huracan EVO supercar",
                thumbnail: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a",
                features: [
                    "Carbon Fiber",
                    "Performance Exhaust"
                ],
                isFeatured: true
            },


            {
                brand: "Toyota",
                model: "Land Cruiser 300",
                year: 2024,
                price: 90000,
                currency: "AZN",
                color: "White",
                mileage: 6000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "4WD",
                bodyType: "SUV",
                engine: "3.5 Twin Turbo",
                engineVolume: 3.5,
                horsepower: 409,
                seats: 7,
                condition: "New",
                city: "Baku",
                description: "Reliable Toyota Land Cruiser SUV",
                thumbnail: "https://images.unsplash.com/photo-1542362567-b07e54358753",
                features: [
                    "Off Road",
                    "7 Seats"
                ],
                isFeatured: true
            },


            {
                brand: "Ferrari",
                model: "Roma",
                year: 2023,
                price: 300000,
                currency: "AZN",
                color: "Red",
                mileage: 1500,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "RWD",
                bodyType: "Coupe",
                engine: "V8 Twin Turbo",
                engineVolume: 3.9,
                horsepower: 612,
                seats: 2,
                condition: "New",
                city: "Baku",
                description: "Ferrari Roma luxury grand tourer",
                thumbnail: "https://images.unsplash.com/photo-1592198084033-aade902d1aae",
                features: [
                    "Carbon Package",
                    "Premium Sound"
                ],
                isFeatured: true
            },


            {
                brand: "Volkswagen",
                model: "Golf GTI",
                year: 2022,
                price: 45000,
                currency: "AZN",
                color: "Yellow",
                mileage: 25000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "FWD",
                bodyType: "Hatchback",
                engine: "2.0 TSI",
                engineVolume: 2,
                horsepower: 241,
                seats: 5,
                condition: "Used",
                city: "Baku",
                description: "Volkswagen Golf GTI sport hatchback",
                thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
                features: [
                    "Sport Mode",
                    "Digital Cockpit"
                ],
                isFeatured: false
            },
            {
                brand: "McLaren",
                model: "720S",
                year: 2023,
                price: 280000,
                currency: "AZN",
                color: "Orange",
                mileage: 3000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "RWD",
                bodyType: "Coupe",
                engine: "V8 Twin Turbo",
                engineVolume: 4,
                horsepower: 710,
                seats: 2,
                condition: "Used",
                city: "Baku",
                description: "McLaren 720S high performance supercar with incredible acceleration",
                thumbnail: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
                features: [
                    "Carbon Fiber Body",
                    "Active Aerodynamics",
                    "Sport Exhaust"
                ],
                isFeatured: true
            },


            {
                brand: "Bentley",
                model: "Continental GT",
                year: 2024,
                price: 220000,
                currency: "AZN",
                color: "Dark Blue",
                mileage: 1000,
                fuelType: "Petrol",
                transmission: "Automatic",
                drivetrain: "AWD",
                bodyType: "Coupe",
                engine: "6.0 W12 Twin Turbo",
                engineVolume: 6,
                horsepower: 650,
                seats: 4,
                condition: "New",
                city: "Baku",
                description: "Bentley Continental GT luxury grand touring coupe",
                thumbnail: "https://images.unsplash.com/photo-1563720223185-11003d516935",
                features: [
                    "Luxury Leather Interior",
                    "Premium Audio",
                    "Massage Seats"
                ],
                isFeatured: true
            }

        ];
        await Car.insertMany(cars);
        res.json({
            message: "Cars seeded successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
export default router;