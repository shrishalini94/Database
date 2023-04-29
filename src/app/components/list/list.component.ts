import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
constructor ( private customer: CustomerService){}
customerData: any=[];
  ngOnInit(): void {
    this.customer.getAllCustomer().subscribe( ( allData ) => {
      console.log( allData );
      this.customerData=allData;
    });
  }

  delete(customer_id: any){
    this.customer.delete(customer_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
    });


  }
}

