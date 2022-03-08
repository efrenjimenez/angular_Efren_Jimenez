import { TestBed } from '@angular/core/testing';

import { VigilanteGaleriaGuard } from './vigilante-galeria.guard';

describe('VigilanteGaleriaGuard', () => {
  let guard: VigilanteGaleriaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteGaleriaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
