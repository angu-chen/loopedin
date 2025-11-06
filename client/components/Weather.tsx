import { useWeather } from '../hooks/useWeather'

interface Props {
  latitude: number
  longitude: number
}

export default function Weather({ latitude, longitude }: Props) {
  const {
    data: weatherData,
    isError,
    isPending,
  } = useWeather(latitude, longitude)

  if (isError) {
    return <p>Error retrieving weather. Please try again later</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex min-h-screen items-center antialiased">
      <div className="mx-auto w-full max-w-sm">
        <div className="w-full rounded-lg p-5 shadow dark:bg-gray-800">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-400">
            {new Date(
              weatherData.forecast.forecastday[0].date,
            ).toLocaleDateString('en-NZ', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
          <div className="mb-2 mt-4 flex">
            <div className="flex-1">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {weatherData.location.name},
                <br />
                {weatherData.location.country}
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-300">
                {weatherData.current.temp_c} &deg;C
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {weatherData.current.condition.text}
              </div>
            </div>
            <div className="w-24">
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt={weatherData.current.condition.text}
                loading="lazy"
              />
            </div>
          </div>
          {weatherData.forecast.forecastday.map((forecast, index) => (
            <div
              key={`${forecast.date}`}
              className="flex justify-between space-x-2 border-t dark:border-gray-500"
            >
              {index !== 0 && (
                <div className="flex-1 border-r p-4 pt-3 text-center dark:border-gray-500">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(forecast.date).toLocaleDateString('en-NZ')}
                  </div>
                  <img
                    src={`https:${forecast.day.condition.icon}`}
                    alt={forecast.day.condition.text}
                    loading="lazy"
                    className="mx-auto"
                  />
                  <div className="mt-1.5 font-semibold text-gray-800 dark:text-gray-300">
                    {forecast.day.maxtemp_c} &deg;C
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {forecast.day.condition.text}
                  </div>
                </div>
              )}
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
