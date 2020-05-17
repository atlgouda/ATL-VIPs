import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipsComponent } from './vips.component';

describe('VipsComponent', () => {
  let component: VipsComponent;
  let fixture: ComponentFixture<VipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
