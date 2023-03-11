import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  panelOpenState = false;
  newNote: Note|any = {
    // id: null,
    title: "",
    content: "",
    reminderDate: "",
    category: "",
    priority: ""
  };
  constructor (private _snackBar: MatSnackBar, private myservices:NotesService){
  }
  addNote(){
    if(this.newNote.priority!=="" && this.newNote.title!==""&& this.newNote.reminderDate!==""&&this.newNote.category!==""){
      this.myservices.addNotes(this.newNote).subscribe(data=>alert("The Note was added"), error=>alert("The data was not added"))
      this.openSnackBar('Feedback Submitted SuccessFully', 'Success')
    } else{
      this.openSnackBar('Failed to add Note', "Ok")
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.newNote={};
  }

}
