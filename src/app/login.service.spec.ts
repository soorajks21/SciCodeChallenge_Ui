import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
class HttpClientStub {
  handler() { }
}
describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: HttpClientStub }
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
