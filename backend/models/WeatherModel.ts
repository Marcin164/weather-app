import mongoose from "mongoose";
import { Schema, model } from "mongoose";

type WeatherData = {
  city:String
  date:String
}   

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

WeatherSchema.statics.getWeatherData = async function (data:WeatherData){
  if(!data) throw Error("And error with data occured!")
  const weather = await this.findOne({
    city: data.city,
    date: data.date
  })
  if(weather) return weather;
  throw Error("Could not find any data")
}

WeatherSchema.statics.getCities = async function (){
  let date:Date = new Date()
  let day:number = date.getDate()
  let month:number = date.getMonth()+1
  let year:number = date.getFullYear()
  const weatherData:Array<any> = await this.find({date: `${day}.${month}.${year}`})
  let cities:Array<string> = []
  for(let i = 0 ; i < weatherData.length ; i++){
    let city = weatherData[i].city
    cities.push(city)
  }
  return cities
}

const WeatherModel = model(
  "weather",
  WeatherSchema
)

module.exports = WeatherModel