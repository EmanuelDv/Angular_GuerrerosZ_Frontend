import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreroEditComponent } from './guerrero-edit.component';

describe('GuerreroEditComponent', () => {
  let component: GuerreroEditComponent;
  let fixture: ComponentFixture<GuerreroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerreroEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerreroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
