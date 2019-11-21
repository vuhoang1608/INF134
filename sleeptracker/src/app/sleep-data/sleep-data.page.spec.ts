import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepDataPage } from './sleep-data.page';

describe('SleepDataPage', () => {
  let component: SleepDataPage;
  let fixture: ComponentFixture<SleepDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
