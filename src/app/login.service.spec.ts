import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
class HttpClientStub {
  handler() { }
}
describe('LoginService', () => {
  let httpMock: HttpTestingController;
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService
      ],
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get true if valid credentials passed', () => {
    const validCredentials = {
      username: 'sooraj',
      password: 'Password'
    };

    service.mockLoginService(validCredentials.username, validCredentials.password).subscribe(value => {
      expect(value).toBeTruthy();
    });

  });

  it('should get false if invalid credentials passed', () => {
    const validCredentials = {
      username: 'sooraj',
      password: 'pass'
    };

    service.mockLoginService(validCredentials.username, validCredentials.password).subscribe(value => {
      expect(value).toBeFalsy();
    });

  });
});
