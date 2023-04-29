



import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private customer:CustomerService,private router:ActivatedRoute){}
     edit = new FormGroup({
      name : new FormControl( '' ),
      email : new FormControl( '' )
    
     });
message: boolean=false;
    
  
ngOnInit(): void{
//console.log(this.router.snapshot.params['id'])
this.customer.getCustomerById( this.router.snapshot.params['id']).
subscribe( (result: any )=>  {
  //console.log(result)

  this.edit = new FormGroup({
    name : new FormControl( result['name']),
    email : new FormControl( result['name'] )
});
});
}
UpdateData(){
  this.customer.updateCustomerData(this.router.snapshot.params['id'],this.edit.value).
 subscribe((result)=>{
  //console.log(result)
  this.message=true;
 })
}
removeMessage(){
this.message=false;

}}


