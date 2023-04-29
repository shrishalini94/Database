



import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url='http://localhost:3000/customer';
  constructor( private http: HttpClient ) { }
  getAllCustomer(){
    return this.http.get( this.url );
  }

  saveCustomerData(data:any){
console.log(data);
return this.http.post(this.url,data)
  }

delete( id : any){
  return this.http.delete(`${this.url}/${id}`);

}
getCustomerById( id :number){
  return this.http.get( `${this.url}/${id}`);
}
updateCustomerData( id: number , data: any ){
  return this.http.put( `${this.url}/${id}`,data);
 
}
}
