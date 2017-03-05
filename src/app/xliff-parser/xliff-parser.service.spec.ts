/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { XliffParserService } from './xliff-parser.service';

describe('XliffParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XliffParserService]
    });
  });

  it('should ...', inject([XliffParserService], (service: XliffParserService) => {
    expect(service).toBeTruthy();
  }));
});
