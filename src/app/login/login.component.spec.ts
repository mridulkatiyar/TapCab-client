import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let service:AuthenticationService;
  let spy:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('returns true when user is authenticated',()=>{
    service=TestBed.get(AuthenticationService);
    spy=spyOn(service,'authenticate').and.callThrough();
    expect(spy("Admin123","pass")).toBeTruthy();
});
it('returns false when user is not authenticated', () => {
    service = TestBed.get(AuthenticationService);
    spy= spyOn(service,'authenticate').and.callThrough();
    expect(spy("Admin123","pa")).toBeFalsy();
    
    });




});
