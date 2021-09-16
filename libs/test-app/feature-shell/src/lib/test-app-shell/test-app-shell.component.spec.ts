import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppShellComponent } from './test-app-shell.component';

describe('TestAppShellComponent', () => {
  let component: TestAppShellComponent;
  let fixture: ComponentFixture<TestAppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAppShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
