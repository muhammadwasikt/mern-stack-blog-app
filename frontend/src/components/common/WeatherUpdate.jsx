import { useState } from "react";
import { postReq } from "../../api/axios";


const WeatherUpdate = () => {

  const [response, setResponse] = useState();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error accessing location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
  const fetchWeatherData = async (latitude, longitude) => {
    const response = await postReq('/weather/update', { latitude: latitude, longitude: longitude })
    setResponse(response);
  }
  return (
    <>
      {response && <div className="flex flex-wrap md:flex-row items-center md:justify-between justify-center p-4 border gap-8">
        {/* Location Info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">
            {response?.location.name || "City Name"}
          </h1>
          <h2 className="text-md text-secondary">
            {response?.location.region || "Region"}, {response?.location.country || "Country"}
          </h2>
        </div>

        {/* Timezone and Date Info */}
        <div className="text-sm text-gray-500 text-center md:text-left">
          <p>
            <span className="font-semibold">Timezone:</span> {response?.location.tz_id || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Date & Time:</span> {response?.location.localtime || "N/A"}
          </p>
        </div>

        {/* Weather Info */}
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">
            {response?.current.condition.text || "Weather Condition"}
          </p>
          <p className="text-2xl font-bold text-primary">
            {response?.current.temp_c ? `${response?.current.temp_c}°C` : "N/A"}
          </p>
        </div>

        {/* Coordinates Info */}
        <div className="flex-col hidden md:flex items-center md:items-start text-sm text-gray-500">
          <p className="flex items-center gap-2">
            <span className="font-semibold">Latitude:</span> {response?.location.lat || "N/A"}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold">Longitude:</span> {response?.location.lon || "N/A"}
          </p>
        </div>

        {/* Weather Icon */}
        <img
          src={response?.current.condition.icon || "https://via.placeholder.com/64"}
          alt="Weather Icon"
          className="w-16 h-16 bg-blue-200 p-2 rounded-full shadow-lg hidden md:flex"
        />
      </div>}
    </>
  )
}

export default WeatherUpdate
