import { TestBed } from '@angular/core/testing';

import { UserInterfaceService } from './user-interface.service';

describe('UserInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInterfaceService = TestBed.get(UserInterfaceService);
    expect(service).toBeTruthy();
  });
});
