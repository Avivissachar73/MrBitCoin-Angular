import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySenderComponent } from './money-sender.component';

describe('MoneySenderComponent', () => {
  let component: MoneySenderComponent;
  let fixture: ComponentFixture<MoneySenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneySenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneySenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
