import { useGeolocation } from '../hooks/useGeolocation'
import Weather from './Weather'

export default function GeoLocator() {
  const { locationInfo, locationErr } = useGeolocation()

  if (!locationInfo) {
    return <p>Loading...</p>
  }

  if (locationErr) {
    return <p>Please enable location to retrieve data</p>
  }

  return (
    <Weather
      latitude={locationInfo.latitude}
      longitude={locationInfo.longitude}
    />
  )
}
