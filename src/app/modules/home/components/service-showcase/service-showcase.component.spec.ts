import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShowcaseComponent } from './service-showcase.component';

describe('ServiceShowcaseComponent', () => {
  let component: ServiceShowcaseComponent;
  let fixture: ComponentFixture<ServiceShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
