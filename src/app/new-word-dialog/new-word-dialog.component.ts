import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Word } from '../interfaces/Word';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-new-word-dialog',
  templateUrl: './new-word-dialog.component.html',
  styleUrls: ['./new-word-dialog.component.css']
})
export class NewWordDialogComponent implements OnInit {
 newWord = ''
  constructor(public dialogRef: MatDialogRef<NewWordDialogComponent>, private wordsService: WordsService,private router: Router) { }

  ngOnInit(): void {
  }
  saveNewWord(){
    let newword: Word={
      id:'',
      word:this.newWord
    };
    this.wordsService.saveNewWord(newword).subscribe(val=>{
      alert('Saved Successfully');
      this.dialogRef.close();
      location.reload();
      this.router.navigate(['']);
      
    })
  }
}
