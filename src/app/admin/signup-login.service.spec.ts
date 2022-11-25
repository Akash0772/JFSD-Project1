import { TestBed } from '@angular/core/testing';

import { SignupLoginService } from './signup-login.service';

describe('SignupLoginService', () => {
  let service: SignupLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
