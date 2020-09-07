import { TestBed } from '@angular/core/testing';

import { TableService } from './table.service';

describe('TableService', () => {
  let service: TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check value returned by getData', () => {
    let data =  [{
      name: "John",
      address: "London",
      age: "32",
      phone: "12345" 
    }, 
    {
      name: "Paul",
      address: "Paris",
      age: "27",
      phone: "67890"
    }];
    expect(service.getdata()).toEqual(service.data);
  })
});
