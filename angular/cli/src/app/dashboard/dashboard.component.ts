import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Output()
  searchEmit=new EventEmitter();
searchText=""
searchedItem(rcvd:any){
this.searchEmit.emit(rcvd);
}
}
