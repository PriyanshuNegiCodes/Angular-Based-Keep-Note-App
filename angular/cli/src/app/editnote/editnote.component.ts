import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {

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
  }


  // addNote(){
  //   alert(this.newNote.category)
  //   if(this.newNote.priority!=="" && this.newNote.title!==""&& this.newNote.reminderDate!==""&&this.newNote.category!==""){
    // this.myservices.addNotes(this.newNote).subscribe(data=>console.log("The Note was added"), error=>console.log("The data was not added"))
  //     this.openSnackBar('Feedback Submitted SuccessFully', 'Success')
  //   } else{
  //     this.openSnackBar('Failed to add Note', "Ok")
  //   }
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.newNote={};
  }

}
