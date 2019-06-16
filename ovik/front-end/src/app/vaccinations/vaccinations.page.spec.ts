import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationsPage } from './vaccinations.page';

describe('VaccinationsPage', () => {
  let component: VaccinationsPage;
  let fixture: ComponentFixture<VaccinationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
