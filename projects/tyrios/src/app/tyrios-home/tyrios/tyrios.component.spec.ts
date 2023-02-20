import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyriosComponent } from './tyrios.component';

describe('TyriosComponent', () => {
  let component: TyriosComponent;
  let fixture: ComponentFixture<TyriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
