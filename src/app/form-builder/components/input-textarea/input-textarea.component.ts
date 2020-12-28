import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

}
