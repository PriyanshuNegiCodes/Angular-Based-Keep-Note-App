import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchNote="";
  
  searchButtonText="Search";
  @Output()
  eventObj=new EventEmitter();

  search(){
     this.eventObj.emit(this.searchNote);
     
     if (this.searchButtonText === 'Search') {
      this.searchButtonText = 'Reset';
    } else {
      this.searchButtonText = 'Search';
    }
    this.searchNote="";
  }

}
