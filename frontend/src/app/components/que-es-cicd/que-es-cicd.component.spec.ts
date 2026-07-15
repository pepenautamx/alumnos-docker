import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsCicdComponent } from './que-es-cicd.component';

describe('QueEsCicdComponent', () => {
  let component: QueEsCicdComponent;
  let fixture: ComponentFixture<QueEsCicdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsCicdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsCicdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
