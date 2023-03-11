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

  constructor(private myservice:NotesService){
  }

  ngOnInit(){
    this.NoteData=this.myservice.getNotes().subscribe(data=>alert("The data was fetched "))
  }
}
