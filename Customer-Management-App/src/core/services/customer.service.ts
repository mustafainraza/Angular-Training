import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerIdSource = new BehaviorSubject<number>(1);
  currentCustomerId = this.customerIdSource.asObservable();

  constructor() { }

  changeCustomerId(id: number) {
    this.customerIdSource.next(id);
  }


  customers: Customer[] = [
    {
      id:1,
      image: '../../assets/customer-1.png',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      orderTotal: 100
    },
    {
      id:2,
      image: '../../assets/customer-1.png',
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      orderTotal: 200
    },
    {
      id:3,
      image: '../../assets/customer-2.png',
      firstName: 'Michael',
      lastName: 'Johnson',
      address: '789 Oak St',
      city: 'Chicago',
      state: 'IL',
      orderTotal: 150
    },
    {
      id:4,
      image: '../../assets/customer-2.png',
      firstName: 'Emily',
      lastName: 'Brown',
      address: '101 Pine St',
      city: 'Houston',
      state: 'TX',
      orderTotal: 300
    },
    {
      id:5,
      image: '../../assets/customer-1.png',
      firstName: 'David',
      lastName: 'Wilson',
      address: '202 Maple St',
      city: 'San Francisco',
      state: 'CA',
      orderTotal: 250
    },
    {
      id:6,
      image: '../../assets/customer-1.png',
      firstName: 'Sarah',
      lastName: 'Davis',
      address: '303 Walnut St',
      city: 'Seattle',
      state: 'WA',
      orderTotal: 180
    }
  ];

  

  findbyId(id:number){
   return this.customers.find(cust=>cust.id==id)
  }

}
