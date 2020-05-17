import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipDetailComponent } from './vip-detail.component';

describe('VipDetailComponent', () => {
  let component: VipDetailComponent;
  let fixture: ComponentFixture<VipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
