import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalBackInterfaceComponent } from './minimal-back-interface.component';

describe('MinimalBackInterfaceComponent', () => {
  let component: MinimalBackInterfaceComponent;
  let fixture: ComponentFixture<MinimalBackInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalBackInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalBackInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
