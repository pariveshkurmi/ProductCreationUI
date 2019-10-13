import { TestBed } from '@angular/core/testing';

import { ProductBackendServiceService } from './product-backend-service.service';

describe('ProductBackendServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBackendServiceService = TestBed.get(ProductBackendServiceService);
    expect(service).toBeTruthy();
  });
});
