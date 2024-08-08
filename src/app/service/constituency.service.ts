import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constituency } from '../model/Constituency';

@Injectable({
  providedIn: 'root'
})
export class ConstituencyService {
  readonly BASE_URL='http://localhost:9090/constituency-service/api/constituency';
  constructor(private http:HttpClient) { }

  createConstituency(formData: any): Observable<HttpResponse<any>>{
    return this.http.post(this.BASE_URL,formData,{observe:'response'});
  }

  getAllConstituencies(){
    return this.http.get<Constituency[]>(this.BASE_URL);
  }
}
