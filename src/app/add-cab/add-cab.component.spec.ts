import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCabComponent } from './add-cab.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { RouterTestingModule } from '@angular/router/testing';
 import { AuthenticationService } from '../authentication.service';

describe('AddCabComponent', () => {
  let component: AddCabComponent;
  let fixture: ComponentFixture<AddCabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCabComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
