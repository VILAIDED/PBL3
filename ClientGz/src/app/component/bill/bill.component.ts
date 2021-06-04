import { Component, OnInit } from '@angular/core';
import {Bill} from '../../model/bill';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(
      public dialogRef:MatDialogRef<BillComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: Bill
      )
      {
         this.local_data = {...data} 
      }
  local_data: any;

  ngOnInit(): void {
  }

  oder()
  {
    this.dialogRef.close({data:this.local_data});
  }
}
