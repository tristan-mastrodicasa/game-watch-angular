import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBarInterfaceComponent } from './double-bar-interface.component';

describe('DoubleBarInterfaceComponent', () => {
  let component: DoubleBarInterfaceComponent;
  let fixture: ComponentFixture<DoubleBarInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleBarInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBarInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
