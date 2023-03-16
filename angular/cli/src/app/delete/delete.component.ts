import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor (private route: ActivatedRoute,private _snackBar: MatSnackBar, private myservices:NotesService){
  }

  ngOnInit(){
    let id:any=0;
    alert("hii")
    this.route.paramMap.subscribe(params => {
      id= params.get('id');
    });

    this.myservices.deleteNoteById(id).subscribe(data=>alert(data), error=>alert("this is the error"))
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  //   this.newNote={};
  //   this.NoteData={};
  // }

}