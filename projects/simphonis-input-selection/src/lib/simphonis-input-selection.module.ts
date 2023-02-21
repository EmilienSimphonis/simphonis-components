import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SimphonisInputSelectionComponent } from './simphonis-input-selection.component';



@NgModule({
  declarations: [
    SimphonisInputSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SimphonisInputSelectionComponent
  ]
})
export class SimphonisInputSelectionModule { }
