import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  constructor(private customer:CustomerService){}
     add = new FormGroup({
      name : new FormControl( '' ),
      email : new FormControl( '' )
    
     });
message: boolean=false;
    
  
ngOnInit(): void{

}
SaveData(){
 // console.log(this.add.value);
  this.customer.saveCustomerData(this.add.value).subscribe((result)=>{
    //console.log(result);
    this.message=true;
    this.add.reset( {} );
  })
}
removeMessage(){
this.message=false;

}}