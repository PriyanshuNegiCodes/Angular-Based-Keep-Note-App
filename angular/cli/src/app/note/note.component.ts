import { Component } from '@angular/core';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  searchdata:any
  NoteData: Note|any;
  searchNote="";
  
  searchButtonText="Search";
  constructor(private myservice:NotesService){}

  search(){
    if(this.searchNote===""){
      this.ngOnInit();
    }else{
      this.sorted(this.searchNote)
    }
  }
  ngOnInit(){
    this.myservice.getNotes().subscribe(data => this.NoteData = data);
  }

  sorted(text:any){
    this.myservice.getNotes().subscribe(data => this.NoteData = data.filter(sort=>sort.title===text));
  }
  
 


  dateChange(input: any) {
    let date = new Date(input);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  }
}
