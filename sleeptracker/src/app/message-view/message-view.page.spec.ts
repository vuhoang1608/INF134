import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageViewPage } from './message-view.page';

describe('MessageViewPage', () => {
  let component: MessageViewPage;
  let fixture: ComponentFixture<MessageViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
