import { TestBed } from '@angular/core/testing';

import { PostadsService } from './postads.service';

describe('PostadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostadsService = TestBed.get(PostadsService);
    expect(service).toBeTruthy();
  });
});
