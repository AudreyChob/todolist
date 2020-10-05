import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecPageRoutingModule } from './rec-routing.module';

import { RecPage } from './rec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecPageRoutingModule
  ],
  declarations: [RecPage]
})
export class RecPageModule {}
