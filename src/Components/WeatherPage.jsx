function WeatherPage({ weather }) {
  return (
    <div className="mt-6 text-center">

      <img
        className="mx-auto"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <h2 className="text-2xl font-bold">
        {weather.name}
      </h2>
      <p>{weather.sys.country}</p>
      <p>Sunrise {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>

      <p className="text-5xl font-bold my-2">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="capitalize text-gray-600">
        {weather.weather[0].description}
      </p>

      <div className="flex justify-between mt-4">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>

        <div>
          <p className="font-semibold">Wind</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;