import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPartiesComponent } from './student-parties.component';

describe('StudentPartiesComponent', () => {
  let component: StudentPartiesComponent;
  let fixture: ComponentFixture<StudentPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPartiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
