import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsanalyticsComponent } from './reportsanalytics.component';

describe('ReportsanalyticsComponent', () => {
  let component: ReportsanalyticsComponent;
  let fixture: ComponentFixture<ReportsanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsanalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
