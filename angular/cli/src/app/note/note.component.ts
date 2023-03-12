
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from 'src/assets/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnChanges {
  @Input() inputSearchFromHeader: any;
  
  searchdata: any;
  NoteData: Note | any;
  searchNote = '';
  
  searchButtonText = 'Search';

  constructor(private myservice: NotesService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputSearchFromHeader'] && changes['inputSearchFromHeader'].currentValue) {
      let searchValue = changes['inputSearchFromHeader'].currentValue;
      this.sorted(searchValue);
    } else {
      this.myservice.getNotes().subscribe(data => (this.NoteData = data));
    }
  }
  

  sorted(text: any) {
    this.myservice
      .getNotes()
      .subscribe(data => (this.NoteData = data.filter(sort => sort.title===text)));
  }

  dateChange(input: any) {
    let date = new Date(input);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  }
}
