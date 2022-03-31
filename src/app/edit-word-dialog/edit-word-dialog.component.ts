import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Word } from '../interfaces/Word';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-edit-word-dialog',
  templateUrl: './edit-word-dialog.component.html',
  styleUrls: ['./edit-word-dialog.component.css']
})
export class EditWordDialogComponent implements OnInit {
editWord = '';
id = '';

  constructor( public dialogRef: MatDialogRef<EditWordDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Word, private wordsService: WordsService,private router: Router) {

console.log(data);
this.editWord = data.word;
this.id = data.id;
     }

  ngOnInit(): void {
  }
  updateWord(){
    console.log('clicked edited word');
    let editedWord: Word ={
      id:this.id,
      word: this.editWord
    };
this.wordsService.editWord(editedWord).subscribe(val=>{
  console.log(val);
  alert('Success. Word edited.');
  this.dialogRef.close();
  location.reload();
  this.router.navigate(['']);
});

  }
}
