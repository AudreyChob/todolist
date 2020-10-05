import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamembertPage } from './camembert.page';

describe('CamembertPage', () => {
  let component: CamembertPage;
  let fixture: ComponentFixture<CamembertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamembertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamembertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
