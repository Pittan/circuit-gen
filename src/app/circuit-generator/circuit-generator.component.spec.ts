import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitGeneratorComponent } from './circuit-generator.component';

describe('CircuitGeneratorComponent', () => {
  let component: CircuitGeneratorComponent;
  let fixture: ComponentFixture<CircuitGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
