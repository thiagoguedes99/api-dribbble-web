import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShotsComponent } from './detail-shots.component';

describe('DetailShotsComponent', () => {
  let component: DetailShotsComponent;
  let fixture: ComponentFixture<DetailShotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailShotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
