import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/assets/note';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>('http://localhost:3000/notes')
  }
}
