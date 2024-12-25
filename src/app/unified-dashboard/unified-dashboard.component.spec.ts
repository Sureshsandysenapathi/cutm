import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedDashboardComponent } from './unified-dashboard.component';

describe('UnifiedDashboardComponent', () => {
  let component: UnifiedDashboardComponent;
  let fixture: ComponentFixture<UnifiedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnifiedDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnifiedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
