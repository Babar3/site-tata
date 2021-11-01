import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IefComponent } from './ief.component';

describe('IefComponent', () => {
  let component: IefComponent;
  let fixture: ComponentFixture<IefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
