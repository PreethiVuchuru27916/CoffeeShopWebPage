import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeRoastTypesComponent } from './coffee-roast-types.component';

describe('CoffeeRoastTypesComponent', () => {
  let component: CoffeeRoastTypesComponent;
  let fixture: ComponentFixture<CoffeeRoastTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeRoastTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeRoastTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
