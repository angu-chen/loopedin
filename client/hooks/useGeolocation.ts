import { useState } from 'react'

export const useGeolocation = () => {
  const [locationInfo, setLocationInfo] =
    useState<GeolocationCoordinates | null>(null)
  const [locationErr, setLocationErr] = useState<string | null>(null)

  const { geolocation } = navigator

  const successFn = (res: GeolocationPosition) => {
    setLocationInfo(res.coords)
  }

  const errorFn = (res: GeolocationPositionError) => {
    setLocationErr(res.message)
  }

  if (!locationErr && !locationInfo) {
    geolocation.getCurrentPosition(successFn, errorFn)
  }

  return { locationErr, locationInfo }
}

//Coded following instructional video https://www.youtube.com/watch?v=xq5c0oqsS8U
