import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCacheInterceptorComponent } from './no-cache-interceptor.component';

describe('NoCacheInterceptorComponent', () => {
  let component: NoCacheInterceptorComponent;
  let fixture: ComponentFixture<NoCacheInterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoCacheInterceptorComponent]
    });
    fixture = TestBed.createComponent(NoCacheInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
