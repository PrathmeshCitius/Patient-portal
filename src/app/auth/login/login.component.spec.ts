import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import{RouterTestingModule} from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasternotficationService } from 'src/app/services/toasternotfication.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.login.and.returnValue(of());
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule,FormsModule,
        RouterTestingModule.withRoutes([]),
          ToastrModule.forRoot()
      ],
      declarations: [ LoginComponent ],
      providers: [   ToasternotficationService ,
      
        {
          provide: AuthService, useValue: authServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('it should test login form group element count',()=>{

    const formelem = fixture.debugElement.nativeElement.querySelector('#loginform');
    const inputelements = formelem.querySelectorAll('input');
    expect(inputelements.length).toEqual(2);
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });


  it('should allow user to log in', () => {
    const formData = {
      "email": "abc@gmail.com",
      "password": "A@12332"
    };
    component.loginForm.setValue(formData);
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith(formData);
  })
});
