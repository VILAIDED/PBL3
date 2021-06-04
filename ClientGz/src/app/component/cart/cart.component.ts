import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { CartService } from '../../service/cart.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { BillComponent } from '../bill/bill.component';
import { Bill } from '../../model/bill';
import { BillService } from '../../service/bill.service';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private billService: BillService,
    public dialogRef: MatDialogRef<CartComponent>,
    public billDialog: MatDialog,
    public accountDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  items: Item[] = [];
  total: number;
  getItem(): void {
      this.items =JSON.parse(localStorage.getItem("Cart"))
      console.log(this.items)
      let total = 0;
      this.items.forEach(function (item) {
        total = total + item.computer.price * item.quanLiTy;
      })
      this.total = total;
    }


  openBill() {
    if (localStorage.getItem("JWT") != null) {
      if (this.items.length != 0) {
        let bill;
        const dialogRef = this.billDialog.open(BillComponent, { data: bill });
        dialogRef.afterClosed().subscribe(result => {
          if (result != undefined) {
            console.log("cart access");
            this.addBill(result.data);
            localStorage.removeItem("Cart");
          }
        });
      }
    }
    else {
      const accountRef = this.accountDialog.open(AccountDialogComponent);
      accountRef.afterClosed().subscribe(
        result => {
          if (result != undefined)
            if (result.check == true)
              this.openBill();
        }
      );
    }
  }
  addBill(bill: Bill) {
    console.log(bill);
    bill.totalPrice = this.total;

    this.billService.addBill(bill,JSON.stringify(this.items)).subscribe();
    this.dialogRef.close();
  }

  updateCart(idCom: number, plus: boolean, remove: boolean) {

    let i = 0;
    this.items.forEach(function (item, index) {
      if (item.computer.id == idCom) {
        i = index;
      }
    })

    if (remove != true) {
      if (plus) {
        this.items[i].quanLiTy++;
        this.total = this.total + this.items[i].computer.price;
      }
      else {
        if (this.items[i].quanLiTy > 0) {
          this.items[i].quanLiTy--;
          this.total = this.total - this.items[i].computer.price;
        }
      }
    }

    else {
      this.total = this.total - this.items[i].computer.price * this.items[i].quanLiTy;
      this.items = this.items.filter(h => h.computer.id !== idCom);
    }
    localStorage.setItem("Cart",JSON.stringify(this.items));
    //this.cartService.updateCart(idCom, plus, remove).subscribe();
  }
}
