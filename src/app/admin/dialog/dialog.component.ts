import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  doAction(){
    this.dialogRef.close({event: 'Ok'});
  }



}