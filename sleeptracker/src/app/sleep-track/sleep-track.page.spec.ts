import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepTrackPage } from './sleep-track.page';

describe('SleepTrackPage', () => {
  let component: SleepTrackPage;
  let fixture: ComponentFixture<SleepTrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepTrackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
