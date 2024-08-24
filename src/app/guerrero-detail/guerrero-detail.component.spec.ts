import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreroDetailComponent } from './guerrero-detail.component';

describe('GuerreroDetailComponent', () => {
  let component: GuerreroDetailComponent;
  let fixture: ComponentFixture<GuerreroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerreroDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerreroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
