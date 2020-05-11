import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentRecordPageRoutingModule } from './student-record-routing.module';

import { StudentRecordPage } from './student-record.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  declarations: [StudentRecordPage]
})
export class StudentRecordPageModule {}
