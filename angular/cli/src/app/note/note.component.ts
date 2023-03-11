import { Component, Input } from '@angular/core';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input()
  search:any
  NoteData: Note|any;

  constructor(private myservice:NotesService){}

  ngOnInit(){
    if(this.search===""){
      this.myservice.getNotes().subscribe(data => this.NoteData = data);
    }else{
      this.myservice.getNotes().subscribe(data => this.NoteData = data.filter(sort=> sort.title===this.search));
    }
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
