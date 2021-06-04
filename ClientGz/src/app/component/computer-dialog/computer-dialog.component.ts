import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Computer} from '../../model/computer';
import {CartService} from '../../service/cart.service'
import { Item} from '../../model/item'
@Component({
  selector: 'app-computer-dialog',
  templateUrl: './computer-dialog.component.html',
  styleUrls: ['./computer-dialog.component.css']
})
export class ComputerDialogComponent implements OnInit {

  local_data:any;
  url: any;
  constructor(
    public dialogRef: MatDialogRef<ComputerDialogComponent>,
    private cartService: CartService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Computer
  ) {
    this.local_data = {...data};
    this.url = data.image;
  }

  ngOnInit(): void {
  }

  addToCart(computer : any):void
  {
    let items : Item[] = [];
    if(localStorage.getItem("Cart") != null){
      items = JSON.parse(localStorage.getItem("Cart"));
    }
    var index = items.findIndex( i  => i.computer.id == computer.id)
    if(index > -1) items[index].quanLiTy++;
    else {
      var item : Item = {
        computer : computer,
        quanLiTy : 1
      }
      items.push(item);
    }
   // console.log(item)
    localStorage.setItem("Cart",JSON.stringify(items));
    this.dialogRef.close();
  }
}

