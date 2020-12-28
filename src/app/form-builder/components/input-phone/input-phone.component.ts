import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss']
})
export class InputPhoneComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

}
