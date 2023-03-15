import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {
  NoteData:Note|any
  categories: string[] = ['Review', 'Office'];
  newNote: Note|any = {
    id: null,
    title: "",
    content: "",
    reminderDate: "",
    category: "",
    priority: ""
  };
  constructor (private _snackBar: MatSnackBar, private myservices:NotesService){
  }

  editNote(){
    this.myservices.updateNote(this.newNote).subscribe(data=>console.log("The Note was added"), error=>console.log("The data was not added"))
    this.openSnackBar('Note Was Successfully Deleted', 'Ok')  
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.newNote={};
  }

  ngOnInit(){
    this.myservices.getNotes().subscribe(data => (this.NoteData = data));
  }
  
}
