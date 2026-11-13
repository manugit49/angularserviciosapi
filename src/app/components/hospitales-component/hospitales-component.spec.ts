import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalesComponent } from './hospitales-component';

describe('HospitalesComponent', () => {
  let component: HospitalesComponent;
  let fixture: ComponentFixture<HospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
