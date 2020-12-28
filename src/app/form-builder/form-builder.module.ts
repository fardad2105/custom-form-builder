import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputDateTimeComponent } from './components/input-date-time/input-date-time.component';
import { InputFileUploadComponent } from './components/input-file-upload/input-file-upload.component';
import { InputMailComponent } from './components/input-mail/input-mail.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputPhoneComponent  }   from './components/input-phone/input-phone.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputTextareaComponent } from './components/input-textarea/input-textarea.component';

@NgModule({
  declarations:
  [
    FormBuilderComponent,
    FormComponent,
    InputCheckboxComponent,
    InputDateComponent,
    InputDateTimeComponent,
    InputFileUploadComponent,
    InputMailComponent,
    InputNumberComponent,
    InputPhoneComponent,
    InputRadioComponent,
    InputSelectComponent,
    InputTextComponent,
    InputTextareaComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormBuilderModule { }
