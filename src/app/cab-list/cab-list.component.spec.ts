import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabListComponent } from './cab-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 import { RouterTestingModule } from '@angular/router/testing';
 import { AuthenticationService } from '../authentication.service';

describe('CabListComponent', () => {
  let component: CabListComponent;
  let fixture: ComponentFixture<CabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
