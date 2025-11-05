import { useState } from 'react'

export const useGeolocation = () => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [locationErr, setLocationErr] = useState(null)

  const { geolocation } = navigator

  const successFn = (res) => {
    console.log({ res })
    setLocationInfo(res.coords)
  }

  const errorFn = (res) => {
    console.log({ res })
    setLocationErr(res.message)
  }

  if (!locationErr && !locationInfo) {
    geolocation.getCurrentPosition(successFn, errorFn)
  }

  return { locationErr, locationInfo }
}
