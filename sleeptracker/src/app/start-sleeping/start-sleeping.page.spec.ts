import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartSleepingPage } from './start-sleeping.page';

describe('StartSleepingPage', () => {
  let component: StartSleepingPage;
  let fixture: ComponentFixture<StartSleepingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSleepingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartSleepingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
