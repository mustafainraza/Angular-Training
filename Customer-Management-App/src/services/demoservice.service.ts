import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor() { }
  getData() {
    return ['Data 1', 'Data 2', 'Data 3']; // Sample data
  }
}
