import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form-builder/components/form/form.component';
import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  { path: '', component: FormBuilderComponent },
  { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
