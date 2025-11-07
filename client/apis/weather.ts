import request from 'superagent'
import type { Weather } from '../../models/weather'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default async function getWeather(
  latitude: number,
  longitude: number,
): Promise<Weather> {
  const response = await request.get(
    `${rootURL}/weather/${latitude}/${longitude}`,
  )
  return response.body as Weather
}
