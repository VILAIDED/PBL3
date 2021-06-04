import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Computer} from '../../model/computer';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-computerManager-dialog',
  templateUrl: './computerManager-dialog.component.html',
  styleUrls: ['./computerManager-dialog.component.css']
})
export class ComputerManagerDialogComponent implements OnInit {

  ngOnInit(): void {
  }
  
  action:string;
  local_data:any;
  constructor(
    public dialogRef: MatDialogRef<ComputerManagerDialogComponent>,
    private cartService: CartService,   
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Computer) {
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.url = data.image;
  }

  doAction(){
    this.local_data.image = this.url;
    this.dialogRef.close({event:this.action,data:this.local_data});
  }


  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  url: any; 
	msg = "";
	dataIm:any;
	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}

  delete(id:number):void
  {
    this.dialogRef.close({event:"delete",data:id});
  }
}
