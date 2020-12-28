import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-mail',
  templateUrl: './input-mail.component.html',
  styleUrls: ['./input-mail.component.scss']
})
export class InputMailComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
    console.log(this.inputField)
  }

}
