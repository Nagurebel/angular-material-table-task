import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

getFirebasedata(){
  return this.http.get<any>('http://localhost:3000/users/userdetails');
}

postfirebasedata(name:any,data: any){
  return this.http.post<any>(`http://localhost:3000/users/unicuser?name=${name}`,data)
}


getFirebasedatawinners(){
  return this.http.get<any>('http://localhost:3000/users/winner');
}


}
