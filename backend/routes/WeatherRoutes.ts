const { Router } = require('express')
const WeatherController = require('../controllers/WeatherController.ts')

const router = Router()

router.get('/getWeather/:city/:date', WeatherController.weather_get)

module.exports = router