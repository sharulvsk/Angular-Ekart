import { Component, Input, EventEmitter, Output } from '@angular/core';
import  {  FormsModule }  from '@angular/forms';
@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all:number;
  @Input()
  inStock:number;
  @Input()
  outOfStock:number;
  selectedRadioButton:any="all";
  @Output()
  selectedRadioChange:EventEmitter<string>=new EventEmitter<string>();
  onRadioChange(){
    this.selectedRadioChange.emit(this.selectedRadioButton);
  }
}