import express from "express";
import dotenv from "dotenv";

dotenv.config();
export const weatherRoute = express.Router();

// Weather Route
weatherRoute.post("/update", async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Latitude and longitude are required." });
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      return res.status(400).json({ status: 400, message: "Failed to fetch weather data." });
    }

    const weatherData = await response.json();
    return res.status(200).json({ status: 200, data: weatherData });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return res.status(500).json({ status: 500, error: "Internal server error." });
  }
});
