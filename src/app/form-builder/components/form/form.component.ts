import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InputFormat } from 'src/data/inputFormat';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  inputForm: InputFormat[] = [];

  @ViewChild('f') signupForm: NgForm;
  constructor(
    private dataTranserService: DataTransferService
    ) { }

  ngOnInit() {
    this.getFormData();
  }

  getFormData() { 
    this.dataTranserService.inventoryChanged$.subscribe( data => {
      this.inputForm = data;
    })
  }

  onSubmit() {
    console.log(this.signupForm)
  }

}
