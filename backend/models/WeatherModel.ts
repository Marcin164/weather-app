import { Schema, model } from "mongoose";

const WeatherSchema:Schema = new Schema({
  date: String,
  city: String,
  data: [
    {
      hour: Number,
      humidity: Number,
      temperature: Number,
      windStrength: Number,
      windDirection: String,
      pressure: Number,
      weather: String,
      rainFall: Number,
    },
  ],
  airQuality: [
    {
      tag: String,
      value: Number,
    },
  ],
  sunRise: String,
  moonRise: String,
});

WeatherSchema.statics.getWeatherData = async function (data:any){
  if(!data) throw Error("And error with data occured!")
  const weather = await this.find({
    city: data.city,
    date: data.date
  })
  if(weather) return weather;
  throw Error("Could not find any data")
}

const WeatherModel = model(
  "weather",
  WeatherSchema
)

module.exports = WeatherModel