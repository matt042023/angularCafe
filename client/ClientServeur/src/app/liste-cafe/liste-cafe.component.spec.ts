import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCafeComponent } from './liste-cafe.component';

describe('ListeCafeComponent', () => {
  let component: ListeCafeComponent;
  let fixture: ComponentFixture<ListeCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
