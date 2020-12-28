import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputFormat } from 'src/data/inputFormat';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  inputForm: InputFormat[] = [];

  private inventorySubject$ = new BehaviorSubject<InputFormat[]>(this.inputForm);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  constructor() { }

  addToInventory(inputsForm: InputFormat[]) {
    this.inventorySubject$.next(inputsForm);
  }

  }
