import { Component, Input, OnInit } from '@angular/core';
import { InputFormat } from 'src/data/inputFormat';

@Component({
  selector: 'app-input-file-upload',
  templateUrl: './input-file-upload.component.html',
  styleUrls: ['./input-file-upload.component.scss']
})
export class InputFileUploadComponent implements OnInit {

  @Input() inputField: InputFormat;
  constructor() { }

  ngOnInit() {
  }

}
