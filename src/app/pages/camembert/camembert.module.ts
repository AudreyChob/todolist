import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamembertPageRoutingModule } from './camembert-routing.module';

import { CamembertPage } from './camembert.page';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { Chart } from 'chart.js';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamembertPageRoutingModule,
    Ng2GoogleChartsModule,

  ],
  declarations: [CamembertPage]
})
export class CamembertPageModule {}
