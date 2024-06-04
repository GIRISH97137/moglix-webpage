import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarEnergyMainpageComponent } from './solar-energy-mainpage.component';

describe('SolarEnergyMainpageComponent', () => {
  let component: SolarEnergyMainpageComponent;
  let fixture: ComponentFixture<SolarEnergyMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarEnergyMainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarEnergyMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
