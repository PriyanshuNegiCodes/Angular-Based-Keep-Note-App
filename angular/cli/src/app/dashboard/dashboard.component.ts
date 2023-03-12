
import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input()
  searchFromHeader:any
  
  showAddNote = false;
  
  addNote(){
    this.showAddNote = true;
  }
}
