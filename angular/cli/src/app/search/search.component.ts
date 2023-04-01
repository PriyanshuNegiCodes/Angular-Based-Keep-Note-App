import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    inputSearchFromHeader: any;
    
    searchdata: any;
    NoteData: Note | any=[];
    searchNote = '';
    
    searchButtonText = 'Search';
  
    constructor(private myservice: NotesService,private route: ActivatedRoute, private goBack:Router) {}
  
   ngOnInit(){

      let searchNote:any;
      this.route.paramMap.subscribe(params => {
        searchNote= params.get('searchNote');
      });
    
      this.myservice.getNotesByName(searchNote).subscribe(data => (this.NoteData = data));
      if(this.searchNote=""){
        this.back();
      }
      
   }
 
   back(){
    alert("hii");
    this.goBack.navigate(['/dashboard']);
   }
  
    dateChange(input: any) {
      let date = new Date(input);
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      return date.toLocaleString('en-US', options);
    }
}
