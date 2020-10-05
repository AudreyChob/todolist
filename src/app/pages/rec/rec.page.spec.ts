import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecPage } from './rec.page';

describe('RecPage', () => {
  let component: RecPage;
  let fixture: ComponentFixture<RecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
