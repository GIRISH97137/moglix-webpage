import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraWebpageComponent } from './infra-webpage.component';

describe('InfraWebpageComponent', () => {
  let component: InfraWebpageComponent;
  let fixture: ComponentFixture<InfraWebpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraWebpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraWebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
