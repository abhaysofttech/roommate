import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoiceGenderPage } from './choice-gender.page';

describe('ChoiceGenderPage', () => {
  let component: ChoiceGenderPage;
  let fixture: ComponentFixture<ChoiceGenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceGenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceGenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
