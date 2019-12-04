import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrialGetdataPage } from './trial-getdata.page';

describe('TrialGetdataPage', () => {
  let component: TrialGetdataPage;
  let fixture: ComponentFixture<TrialGetdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialGetdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrialGetdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
