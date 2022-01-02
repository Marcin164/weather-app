const Weather = require('../models/WeatherModel')

module.exports.weather_get = async (req:any , res:any) => {
    try{
        let data = req.params
        const weather = await Weather.getWeatherData(data)
        res.status(200).send(weather)
    }catch(err:any){
        res.status(400).send(err)
    }
}