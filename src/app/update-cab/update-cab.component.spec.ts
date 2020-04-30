import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCabComponent } from './update-cab.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { RouterTestingModule } from '@angular/router/testing';
 import { AuthenticationService } from '../authentication.service';

describe('UpdateCabComponent', () => {
  let component: UpdateCabComponent;
  let fixture: ComponentFixture<UpdateCabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCabComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
