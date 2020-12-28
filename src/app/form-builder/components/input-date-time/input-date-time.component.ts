import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-date-time',
  templateUrl: './input-date-time.component.html',
  styleUrls: ['./input-date-time.component.scss']
})
export class InputDateTimeComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

}
