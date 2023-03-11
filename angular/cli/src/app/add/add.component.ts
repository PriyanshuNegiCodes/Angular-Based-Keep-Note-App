import { Component } from '@angular/core';
import { Note } from 'src/assets/note';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newNote: Note = {
    // id: null,
    title: "",
    content: "",
    reminderDate: "",
    category: "",
    priority: ""
  };
}
