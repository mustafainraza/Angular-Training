import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailViewComponent } from './customerdetail-view.component';

describe('CustomerdetailViewComponent', () => {
  let component: CustomerdetailViewComponent;
  let fixture: ComponentFixture<CustomerdetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerdetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerdetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
