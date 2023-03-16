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
  getNotesById(id: number): Observable<Note[]>{
    const url = `http://localhost:3000/notes/${id}`;
    return this.http.get<Note[]>(url);
  }
  
  addNotes(dataIn:Note){
    return this.http.post<Note>('http://localhost:3000/notes', dataIn);
  }
  updateNote(data:Note): Observable<Note> {
 
     return this.http.put<Note>('http://localhost:3000/notes/${}', data);
  }
  
}
