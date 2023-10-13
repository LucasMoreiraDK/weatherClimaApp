import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'fee48655a14cbf9fe782374237d66318';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{})
  }
}
