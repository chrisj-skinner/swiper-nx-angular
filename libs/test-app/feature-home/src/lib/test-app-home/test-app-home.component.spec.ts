import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppHomeComponent } from './test-app-home.component';

describe('TestAppHomeComponent', () => {
  let component: TestAppHomeComponent;
  let fixture: ComponentFixture<TestAppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAppHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
