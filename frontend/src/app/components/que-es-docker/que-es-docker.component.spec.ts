import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsDockerComponent } from './que-es-docker.component';

describe('QueEsDockerComponent', () => {
  let component: QueEsDockerComponent;
  let fixture: ComponentFixture<QueEsDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsDockerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
