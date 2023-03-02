import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomizedCheckboxComponent } from './components/customized-checkbox/customized-checkbox.component';


@NgModule({
  declarations: [
    CustomizedCheckboxComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    CustomizedCheckboxComponent
  ]
})
export class SharedModule { }
