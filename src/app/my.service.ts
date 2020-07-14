import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Myinterface } from './Myinterface'

@Injectable({
  providedIn: 'root'
})
export class MyService {
  listofCart:any=[];

  constructor(private http:HttpClient) { 
    
  }
  getEmployees():Observable<any>
  {
   return  this.http.get('http://localhost:3000/MyCartingElements')
  }
  deleteCart():Observable<any>
  {
    return this.http.delete('http://localhost:3000/MyCartingElements/id');
  }

  postEmployees(emp:Myinterface):Observable<Myinterface>
  {
    if(emp.id===null)
    {
return this.http.post<Myinterface>('',emp,
{
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
    }
    else{
      const findIndex=this.listofCart.findIndex(e=>e.id===emp.id);
      this.listofCart[findIndex]=emp;
    }
  }
}
