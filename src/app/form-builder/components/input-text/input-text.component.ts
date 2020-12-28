import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

}
