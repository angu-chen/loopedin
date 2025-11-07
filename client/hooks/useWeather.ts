import { useQuery } from '@tanstack/react-query'
import getWeather from '../apis/weather.ts'

export function useWeather(latitude: number, longitude: number) {
  return useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(latitude, longitude),
  })
}
