import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionOptionsComponent } from './region-options.component';

describe('RegionOptionsComponent', () => {
  let component: RegionOptionsComponent;
  let fixture: ComponentFixture<RegionOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
