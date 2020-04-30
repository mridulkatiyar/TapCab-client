import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectBookingComponent } from './accept-reject-booking.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { RouterTestingModule } from '@angular/router/testing';
 import { AuthenticationService } from '../authentication.service';

describe('AcceptRejectBookingComponent', () => {
  let component: AcceptRejectBookingComponent;
  let fixture: ComponentFixture<AcceptRejectBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptRejectBookingComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRejectBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
