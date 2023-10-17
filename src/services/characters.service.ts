import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CharacterGetDTO } from 'src/models/characterGetDTO';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  url: string = 'https://rickandmortyapi.com/api/character';
  emitPage: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getCharacters(url?: string): Observable<CharacterGetDTO> {
    const finalUrl = url !== undefined ? url : this.url;
    return this.http.get<CharacterGetDTO>(finalUrl);
  }
}
