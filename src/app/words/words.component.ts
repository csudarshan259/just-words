import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';
import { Word } from '../interfaces/Word';
import { MatDialog } from '@angular/material/dialog';
import { EditWordDialogComponent } from '../edit-word-dialog/edit-word-dialog.component';
import { NewWordDialogComponent } from '../new-word-dialog/new-word-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  editing= false;
  newWord = '';
  wordType= '';
  isnewword=true;
dataSource: Word[] = [];
displayedColumns: string[] = ['id', 'word','edit','delete','new'];


  constructor(private wordsSerivce: WordsService,public dialog: MatDialog,private router:Router) {
    this.wordsSerivce.getWords().subscribe((result) =>{
      this.dataSource = result as Word[];
      console.log(this.dataSource);
    });
   }

  ngOnInit(): void {
  }
  openEditModal(i: number){
   // this.editing = !this.editing;
   this.dialog.open(EditWordDialogComponent, {
    data: {
      id: this.dataSource[i].id,
      word: this.dataSource[i].word,
    },
  });
  }
  
  openNewModal(){
    this.isnewword= true;
    this.wordType= 'New;';
    this.dialog.open(NewWordDialogComponent, {
      data: {
        word: '',
      },
    });
  }
  deleteWord(word: Word){
    this.wordsSerivce.deleteWord(word).subscribe(val=>{
      alert('Deleted Successfully');
      location.reload();
    })
  }
}
