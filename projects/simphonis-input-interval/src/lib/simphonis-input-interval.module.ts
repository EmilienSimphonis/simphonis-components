import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimphonisInputIntervalComponent } from './simphonis-input-interval.component';

@NgModule({
  declarations: [
    SimphonisInputIntervalComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    SimphonisInputIntervalComponent
  ]
})
export class SimphonisInputIntervalModule { }
