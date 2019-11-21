import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdsImagesPage } from './ads-images.page';

describe('AdsImagesPage', () => {
  let component: AdsImagesPage;
  let fixture: ComponentFixture<AdsImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdsImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
