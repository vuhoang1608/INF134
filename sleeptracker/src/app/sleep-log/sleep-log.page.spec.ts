import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepLogPage } from './sleep-log.page';

describe('SleepLogPage', () => {
  let component: SleepLogPage;
  let fixture: ComponentFixture<SleepLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
