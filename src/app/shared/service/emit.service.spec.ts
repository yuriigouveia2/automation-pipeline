/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmitService } from './emit.service';
import { expect } from 'chai';

describe('Service: Emit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitService]
    });
  });

  it('should ...', inject([EmitService], (service: EmitService) => {
    expect(service).to.be.equal(true);
  }));
});
