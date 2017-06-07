import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleImageComponent } from './simple-image.component';

describe('SimpleImageComponent', () => {
  let component: SimpleImageComponent;
  let fixture: ComponentFixture<SimpleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
