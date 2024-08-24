import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreroCreateComponent } from './guerrero-create.component';

describe('GuerreroCreateComponent', () => {
  let component: GuerreroCreateComponent;
  let fixture: ComponentFixture<GuerreroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerreroCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerreroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
