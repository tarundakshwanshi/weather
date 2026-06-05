import { useState } from "react";
import axios from "axios";
import WeatherPage from "./WeatherPage";


function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apikey = import.meta.env.VITE_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );

      setWeather(res.data); 
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-cyan-400 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Weather App
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city to get weather"
            className="border p-2 rounded-lg flex-1"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            onClick={getWeather}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {weather && <WeatherPage weather={weather} />}
      </div>
    </div>
  );
}

export default Home;