import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor (private route: ActivatedRoute,private _snackBar: MatSnackBar,
     private myservices:NotesService, private fb: FormBuilder, private goBack: Router){
  }


  editNote(){
  //  alert(this.newNote[0].content)
    this.myservices.updateNote(this.newNote).subscribe(data=>console.log("The Note was added"), error=>console.log("The data was not added"))
    this.openSnackBar('Note Was edit Successfully', 'Ok')  
    this.NoteData={}
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.newNote={};
    this.NoteData={};
  }

  ngOnInit(){
    let id:any=0;
  
    this.route.paramMap.subscribe(params => {
      id= params.get('id');
    });

    this.myservices.getNotesById(id).subscribe(data => {this.NoteData = data;
        console.log(this.NoteData);
        this.newNote.id=this.NoteData.id
        this.newNote.title=this.NoteData.title
        this.newNote.content=this.NoteData.content
        this.newNote.reminderDate=this.NoteData.reminderDate
        this.newNote.category=this.NoteData.category
        this.newNote.category=this.NoteData.category
      }, error => console.log(error)); 
      this.goBack.navigate(['/dashboard']);
    }  
    
      //For the Unsaved Guard

      allData=this.fb.group({
        head: ['', Validators.required],
        information: ['', Validators.required],
      })

      canExit() {
        if (this.allData.get('head')?.dirty) {
          if (this.allData.get('information') ) {
            return confirm('wanna leave! with out saving it?');
          } else {
            return true;
          }
        }
        else{
          this.newNote={};
          return true;
        }
      }
      get getHead(){
        return this.allData.get('head')
      }
      get getInformatoin(){
        return this.allData.get('information');
      }
}
