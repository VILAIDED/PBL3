import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Account} from '../../model/account';
import {AccountService} from '../../service/account.service';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<AccountDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Account,
    private accountService: AccountService,
  ) { 
    this.local_data = {...data}
  }

  local_data : any;

  ngOnInit(): void {
  }

  login()
  {
    this.accountService.login(this.local_data)
      .subscribe(response =>
        {
          const token = (<any>response).token;
          localStorage.setItem("JWT",token);
          console.log("login success");
        
          this.dialogRef.close({check:true});
        })
  }

  regis()
  {
    this.accountService.register(this.local_data)
      .subscribe(response =>
        {
          console.log("regis success");
          this.login();
          this.dialogRef.close({check:true});
        })
  }
  
}
