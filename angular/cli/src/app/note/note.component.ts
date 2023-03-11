import { Component } from '@angular/core';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  NoteData: Note|any;

  constructor(private myservice:NotesService){}

  ngOnInit(){
    this.myservice.getNotes().subscribe(data => this.NoteData = data);
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
