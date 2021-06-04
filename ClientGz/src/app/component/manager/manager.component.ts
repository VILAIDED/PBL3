import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver,
    public accountDialog: MatDialog,
    public logoutDialog: MatDialog,
  ) {
    this.loginAdmin();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  loginAdmin() {
    let token = localStorage.getItem("JWT");
    if (token != null) {
      let parseJwt = JSON.parse(atob(token.split('.')[1]));

      if (parseJwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == "admin") {
        return;
      }
      else{
        localStorage.removeItem("JWT");
        this.loginAdmin();
      }
    }
    else{
      const accountRef = this.accountDialog.open(AccountDialogComponent, { disableClose: true });

      accountRef.afterClosed().subscribe(
        result => {
          this.loginAdmin();
        }
      );
    }
  }

  openAccount() {
    if (localStorage.getItem("JWT") != null) {
      const logoutRef = this.logoutDialog.open(LogoutComponent);
      logoutRef.afterClosed().subscribe(result =>
        {
          this.loginAdmin();
        });
    }
    else {
      const accountRef = this.accountDialog.open(AccountDialogComponent);
      accountRef.afterClosed().subscribe();
    }
  }

  ngOnInit(): void {
  }

}
