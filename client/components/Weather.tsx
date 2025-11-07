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

  const today = weatherData.forecast.forecastday[0]
  const dateToday = new Date(
    weatherData.forecast.forecastday[0].date,
  ).toLocaleDateString('en-NZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="h-full  bg-[url(/img/clouds.jpg)] bg-cover bg-no-repeat text-center">
      <h1 className="mb-5 p-5 text-6xl font-bold text-blue-950 dark:text-gray-400">
        Forecast
      </h1>

      <div id="container" className="flex justify-center gap-10 pb-44">
        {/* {--Current conditions--} */}
        <div className=" flex flex-row flex-wrap items-stretch justify-center antialiased">
          <div className="w-30 m-4 mx-auto max-w-xl rounded-xl bg-white p-20 shadow-2xl shadow-blue-950 dark:bg-gray-800">
            <h2 className="mb-7 text-4xl font-bold text-gray-800 dark:text-gray-400">
              Current conditions
            </h2>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-400">
              {dateToday}
            </h3>
            <div className="mb-2 mt-4 flex">
              <div className="flex-1">
                <div className="pb-10 pt-5">
                  <div className="mb-2 text-xl text-gray-700 dark:text-gray-400">
                    {weatherData.location.name},
                    <br />
                    {weatherData.location.country}
                  </div>
                  <div className="text-4xl font-bold text-gray-800 dark:text-gray-300">
                    {weatherData.current.temp_c} &deg;C
                  </div>

                  <div className="w-50 mt-10 text-center">
                    <img
                      className="ml-auto mr-auto block scale-150"
                      src={`https:${weatherData.current.condition.icon}`}
                      alt={`Icon for current weather condition`}
                      loading="lazy"
                    />
                  </div>
                  <div className="text-lg text-gray-700 dark:text-gray-400 ">
                    {weatherData.current.condition.text}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-2xl text-gray-800 dark:text-gray-300">
                    <span className="font-bold">Wind</span>
                    {` ${weatherData.current.gust_kph}`} kph
                  </p>
                  <p className="mb-2 text-2xl text-gray-800 dark:text-gray-300">
                    <span className="font-bold">Humidity </span>
                    {weatherData.current.humidity}%
                  </p>
                  <p className="mb-2 text-2xl text-gray-800 dark:text-gray-300">
                    {' '}
                    <span className="font-bold">Rainfall </span>
                    {weatherData.current.precip_in} mm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --Today forecast-- */}
        <div className=" flex flex-row flex-wrap items-start justify-center antialiased">
          <div className="w-30 m-4 mx-auto rounded-xl bg-white p-20 shadow-2xl shadow-blue-950 dark:bg-gray-800">
            <h3 className="pb-2 text-3xl font-bold text-gray-800 dark:text-gray-400">
              Today
            </h3>
            <p className="mb-4 text-xl text-gray-700 dark:text-gray-400 ">
              {new Date(today.date).toLocaleDateString('en-NZ')}
            </p>
            <img
              src={`https:${today.day.condition.icon}`}
              alt="Icon for today's weather condition"
              loading="lazy"
              className="mx-auto"
            />
            <div className="text-xl text-gray-700 dark:text-gray-400">
              {today.day.condition.text}
            </div>
            <div className="my-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">
              <p>
                {today.day.mintemp_c} &deg;C &nbsp;&nbsp;| &nbsp;&nbsp;
                {today.day.maxtemp_c} &deg;C
              </p>
            </div>
            <div className="text-2xl">
              <p className="my-4 ">
                <span className="font-bold">Chance of rain </span>
                {today.day.daily_will_it_rain}%
              </p>
              <p>
                <span className="font-bold">UV level </span> {today.day.uv}
              </p>
            </div>
            {/* {--2day forecast--} */}
            <div className="mt-10 flex gap-28 border-t-2 border-blue-950 p-5 dark:bg-gray-800  ">
              {weatherData.forecast.forecastday.map(
                (forecast, index) =>
                  index !== 0 && (
                    <div
                      key={`${forecast.date} className="flex justify-between space-x-2 border-t dark:border-gray-500"`}
                    >
                      <div>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {new Date(forecast.date).toLocaleDateString('en-NZ')}
                        </p>
                      </div>
                      <img
                        src={`https:${forecast.day.condition.icon}`}
                        alt={`Icon for weather condition in ${index + 1} days`}
                        loading="lazy"
                        className="mx-auto"
                      />
                      <div className="mt-1.5 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        {forecast.day.mintemp_c} &deg;C
                      </div>
                      <div className="mt-1.5 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        {forecast.day.maxtemp_c} &deg;C
                      </div>
                      <div className="text-base text-gray-600 dark:text-gray-400">
                        {forecast.day.condition.text}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
