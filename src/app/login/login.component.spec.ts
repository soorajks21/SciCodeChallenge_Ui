import { async, ComponentFixture, getTestBed, TestBed, tick } from '@angular/core/testing';
import { LoginService } from '../login.service';

import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

class LoginServiceStub {
  login() { }
}

class HttpClientStub {
  handler() { }
}

fdescribe('LoginComponent', () => {
  let injector: TestBed;
  let component: LoginComponent;
  let loginService: LoginService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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

  it('it should login', () => {
    const serviceSpy = spyOn(loginService, 'login').and.returnValue(true);
    component.userName = 'user';
    component.password = 'password';
    component.login();
    expect(serviceSpy).toHaveBeenCalled();
  });
});
