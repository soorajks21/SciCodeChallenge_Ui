import { async, ComponentFixture, getTestBed, TestBed, tick } from '@angular/core/testing';
import { LoginService } from '../login.service';

import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { assert } from 'console';

class LoginServiceStub {
  login() { }
}

class HttpClientStub {
  handler() { }
}

describe('LoginComponent', () => {
  let injector: TestBed;
  let component: LoginComponent;
  let loginService: LoginService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: LoginService, useClass: LoginServiceStub },
        { provide: HttpClient, useClass: HttpClientStub }
      ]
    })
      .compileComponents();
    injector = getTestBed();
    loginService = injector.inject(LoginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call loginservice', () => {
    const serviceSpy = spyOn(loginService, 'login').and.returnValue(of(true));
    component.userName = 'user';
    component.password = 'password';
    component.login();
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('it should set isLoggedIn to true', () => {
    const serviceSpy = spyOn(loginService, 'login').and.returnValue(of(true));
    component.userName = 'user';
    component.password = 'password';
    component.login();
    expect(component.isLoggedIn).toBeTrue();
  });

  it('it should set isLoggedIn to false', () => {
    const serviceSpy = spyOn(loginService, 'login').and.returnValue(of(false));
    component.userName = 'user';
    component.password = 'password';
    component.login();
    expect(component.isLoggedIn).toBeFalse();
    expect(component.errorMessage).toEqual('Invalid Username or password');
  });
});
