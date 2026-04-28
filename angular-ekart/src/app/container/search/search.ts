import { Component, EventEmitter,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchText:string='';
  @Output()
  searchTextChange: EventEmitter<string>=new EventEmitter<string>();
  //onSearchTextChange(){
  //  this.searchTextChange.emit(this.searchText);
  //}
  searchUpdateText(inputEL:HTMLInputElement){
    //console.log(inputEL.value);
    this.searchText=inputEL.value;
    this.searchTextChange.emit(this.searchText);
  }
}
