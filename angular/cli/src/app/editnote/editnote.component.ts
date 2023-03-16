import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  constructor (private route: ActivatedRoute,private _snackBar: MatSnackBar, private myservices:NotesService){
  }

  editNote(){
    this.myservices.updateNote(this.newNote).subscribe(data=>console.log("The Note was added"), error=>console.log("The data was not added"))
    this.openSnackBar('Note Was Successfully Deleted', 'Ok')  
    this.NoteData={}
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.newNote={};
    this.NoteData={};
  }

  ngOnInit(){
    alert("hii")
    let id:any=0;

    this.route.paramMap.subscribe(params => {
      id= params.get('id');
    });


    this.myservices.getNotes().subscribe(data => (this.NoteData = data));
    //this.newNote.id=this.NoteData.id;
    if(this.NoteData==id){
      this.newNote.title=this.NoteData.title;
    this.newNote.content=this.NoteData.content;
    this.newNote.reminderDate=this.NoteData.reminderDate;
    this.newNote.priority=this.NoteData.priority;
    }
  }


  
}
