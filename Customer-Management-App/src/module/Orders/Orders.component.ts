import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/customer.interface';

@Component({
  selector: 'app-Orders',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  items: Item[]= [
    { id: 1, itemName: 'Basketball', price: 7.99 },
    { id: 2, itemName: 'Shoes', price: 295.99},
    {id: 3, itemName: 'Football', price: 52.99},
    {id: 4, itemName: 'Bottle', price: 5.99},
    {id: 5, itemName: 'Laptop', price: 50000.99},
    {id: 6, itemName: 'RTX 3090', price: 350000.99},
    {id: 7, itemName: 'Speaker', price: 280.99}
  ];

  ngOnInit() {
  }

}
