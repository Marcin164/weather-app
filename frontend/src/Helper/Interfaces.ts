export interface DataIF {
  hour: number;
  humidity: number;
  temperature: number;
  windStrength: number;
  windDirection: string;
  pressure: number;
  weather: string;
  rainFall: number;
}

export interface AirQualityIF {
  tag: string;
  value: number;
}

export interface AirQualityStatusIF {
  title: string;
  subTitle: string;
}

export interface RainFallIF {
  rainfall: number;
  hour: number;
}

export interface WeatherAndWindIF{
  weather: string
  windStrength: number
  windDirection: string
  hour: number
}

export interface TemperatureAndHumidityIF{
  temperature: number
  humidity:number
  hour: number
} 

export interface WeatherIF {
  data: Array<DataIF>;
  airQuality: Array<AirQualityIF>;
  airQualityStatus: AirQualityStatusIF;
  events: Array<string>;
  sunRise: string;
  moonRise: string;
}
