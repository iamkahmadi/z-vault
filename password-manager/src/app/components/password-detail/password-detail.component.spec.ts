import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDetailComponent } from './password-detail.component';

describe('PasswordDetailComponent', () => {
  let component: PasswordDetailComponent;
  let fixture: ComponentFixture<PasswordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
