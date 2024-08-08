import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voter } from '../model/Voter';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  readonly BASE_URL='http://localhost:9090/voters-service/api/voters';
  constructor(private http:HttpClient) { }

  createVoter(formData: any):Observable<HttpResponse<any>>{
    return this.http.post(this.BASE_URL,formData,{observe:'response'});
  }
  getAllVoters(){
    return this.http.get<Voter[]>(this.BASE_URL+'/voter-details');
  }
  getAllVotersCount(){
    return this.http.get<number>(this.BASE_URL+'/voter-count');
  }
  getAllVoterCountByGender(name:String){
    return this.http.get<number>(this.BASE_URL+`/voter-count-by-gender/${name}`);
  }
  getVoterDetailsById(voterId:number){
    return this.http.get<Voter>(this.BASE_URL+`/voter-details/${voterId}`);
  }

  getAllVotersByConstituency(constituencyName:string){
    return this.http.get<Voter>(this.BASE_URL+`/voter-details-by-constituency/${constituencyName}`);
  }

  getVoterCountByConstituency(constituencyName:string){
    return this.http.get<number>(this.BASE_URL+`/voter-count-by-constituency/${constituencyName}`);

  }

}
