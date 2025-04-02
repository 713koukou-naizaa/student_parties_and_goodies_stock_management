import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodiesComponent } from './goodies.component';

describe('GoodiesStockComponent', () => {
  let component: GoodiesComponent;
  let fixture: ComponentFixture<GoodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
