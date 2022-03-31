import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Word } from '../interfaces/Word';
@Injectable({
  providedIn: 'root'
})
export class WordsService {
private url = 'https://localhost:49153/api/words';
  constructor(private http:HttpClient) { }
  getWords(){
    return this.http.get(this.url);
  }

  saveNewWord(newWord:Word){

    return this.http.post(this.url,newWord);
  }

  editWord(editedWord: Word){
   let path = this.url+'/'+editedWord.id;
   console.log(path);
    return this.http.put(path,editedWord);
  }

  deleteWord(word:Word){
    let path = this.url+'/'+word.id;
    return this.http.delete(path);

  }
}
