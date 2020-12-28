import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

}
