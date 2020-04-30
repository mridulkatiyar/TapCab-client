import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabDetailsComponent } from './cab-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { RouterTestingModule } from '@angular/router/testing';
 import { AuthenticationService } from '../authentication.service';


describe('CabDetailsComponent', () => {
  let component: CabDetailsComponent;
  let fixture: ComponentFixture<CabDetailsComponent>;
  


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
