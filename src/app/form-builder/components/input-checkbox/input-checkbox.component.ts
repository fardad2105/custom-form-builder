import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

  toggleValue(item): void{
    item.selected = !item.selected;
  }

}
