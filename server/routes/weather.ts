import { Router } from 'express'
import request from 'superagent'
import 'dotenv/config'
import type { Weather } from '../../models/weather.ts'
if (!process.env.WEATHER_KEY) {
  console.warn('Warning: WEATHER_KEY is not set in environment variables.')
}

const router = Router()

router.get('/:lat/:long', async (req, res) => {
  try {
    const lat = req.params.lat
    const long = req.params.long
    const response = await request
      .get('http://api.weatherapi.com/v1/forecast.json')
      .query({
        key: `${process.env.WEATHER_KEY}`,
        q: `${lat},${long}`,
        days: '3',
      })
    res.json(response.body as Weather)
  } catch (error) {
    console.error(
      error instanceof Error
        ? error.message
        : 'Unable to retrieve data from weather API',
    )
    res.status(500).send('Retrieval error')
  }
})

export default router
