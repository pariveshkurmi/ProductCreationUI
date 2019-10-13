import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfirstpageComponent } from './productfirstpage.component';

describe('ProductfirstpageComponent', () => {
  let component: ProductfirstpageComponent;
  let fixture: ComponentFixture<ProductfirstpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductfirstpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
