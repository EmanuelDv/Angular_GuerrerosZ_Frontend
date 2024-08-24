import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerreroListComponent } from './guerrero-list.component';

describe('GuerreroListComponent', () => {
  let component: GuerreroListComponent;
  let fixture: ComponentFixture<GuerreroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerreroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerreroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
