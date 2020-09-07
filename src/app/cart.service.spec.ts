import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CartService} from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getItems', () => {
    expect(service.getItems()).toEqual(service.ItemList);
  })
//toHaveBeenCalled function of sypon
  it('should call getSalarySlip', () => {
    spyOn(service, 'checkAuthentication').and.returnValue(true);
    expect(service.getSalarySlip()).toEqual("Salary Slip");
    expect(service.checkAuthentication).toHaveBeenCalled();
  })
//toHaveBeenCalledTimes function of sypon
  it('should call getSalarySlip', () => {
    spyOn(service, 'checkAuthentication').and.returnValue(true);
    expect(service.getSalarySlip()).toEqual("Salary Slip");
    expect(service.checkAuthentication).toHaveBeenCalledTimes(1);
  })

//callthrough function of sypon
  it("should call the getSalarySlip callthrough", () => {
    let spy = spyOn(service, "checkAuthentication").and.callThrough();
    expect(service.getSalarySlip()).toEqual("Salary Slip");
    expect(spy).toHaveBeenCalled(); 
  })

  //callfake function of sypon
  it("should call the getSalarySlip callthrough", () => {
    let spy = spyOn(service, "checkAuthentication").and.callFake(() => {
    localStorage.setItem("user", "satyam");
    return (localStorage.getItem("user") === "rahul");
    });
    expect(service.getSalarySlip()).toEqual("Not Authenticated");
    
  })
});

