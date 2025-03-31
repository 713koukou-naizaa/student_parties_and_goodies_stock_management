import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodiesStockComponent } from './goodies-stock.component';

describe('GoodiesStockComponent', () => {
  let component: GoodiesStockComponent;
  let fixture: ComponentFixture<GoodiesStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodiesStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodiesStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
