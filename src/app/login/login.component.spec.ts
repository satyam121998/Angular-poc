import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  LoginComponent
} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture < LoginComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [HttpClientTestingModule, HttpClientModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("checking on the data received by the http get: functionData", () => {
    let mockdata = [{"Username":"Paul","Password":"Paul123#"},{"Username":"Rita","Password":"Rita123#"}]
    expect(component.getLoginData()).toEqual(component.LoginData);
  })
});
