import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalCardHorizontalComponent } from "app/shared/personal-card-horizontal/personal-card-horizontal.component";


describe('CommentsComponent', () => {
  let component: PersonalCardHorizontalComponent;
  let fixture: ComponentFixture<PersonalCardHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCardHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
