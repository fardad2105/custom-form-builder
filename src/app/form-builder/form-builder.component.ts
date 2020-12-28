import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputFormat, Value } from 'src/data/inputFormat';
import { DataTransferService } from './services/data-transfer.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit,DoCheck {

  selectedInputVal: string;
  inputLabel = '';         
  inputPlaceHolder = '';    
  Validation: Boolean;
  inputForm: InputFormat[] = [];
  enableAddInputBtn = false;
  generateForm = false;
  inputFieldName = '';

  selectVal: '';
  selectedValues: Value[] = [];
  inputTypes: string[] = ['input-text','input-number','input-mail','input-date',
  'input-textarea','input-select','input-radio','input-checkbox','input-datetime','input-fileupload','input-phone'];
  constructor(
    private router: Router,
    private dataTranserService: DataTransferService
    ) { }


  ngDoCheck(): void {
    console.log(this.Validation)
  }

  ngOnInit(): void {
  }

  addFormItems() {  
    const selectedInput : InputFormat = {
      id: this.inputForm.length,
      type: this.selectedInputVal,
      label: this.inputLabel,
      placeHolder: this.inputPlaceHolder,
      Validation: this.Validation,
      name: this.inputFieldName,
      values: this.selectedValues
    }
    this.inputForm.push(selectedInput);
    this.generateForm = true;
    this.selectedValues = [];
    console.log(this.inputForm);
  }

  onChange($event) {
    console.log(this.enableAddInputBtn);
    this.enableAddInputBtn = true
  }

  DeleteRow(index: number) {
    console.log(index);
    this.inputForm = this.inputForm.filter((value,key) => {
      return value.id != index
    })

    console.log(this.inputForm);
  }

  setSelectedValues() {
    const value: Value = {
      label: this.selectVal,
      value: this.selectVal
    }
    this.selectedValues.push(value);
    this.selectVal = '';
    console.log(this.selectedValues)  
  }
  

  GenerateForm() {
    this.dataTranserService.addToInventory(this.inputForm);
    this.router.navigate(['/form'])
  }

}
