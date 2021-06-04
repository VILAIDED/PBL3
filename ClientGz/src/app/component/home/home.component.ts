import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { LogoutComponent } from '../logout/logout.component';
import { OderDialogComponent } from '../oder-dialog/oder-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public accountDialog: MatDialog,
    public logoutDialog: MatDialog,
    public Cartdialog: MatDialog,
    public oderDialog: MatDialog,
  ) {

  }

  openCart() {
    const cartRef = this.Cartdialog.open(CartComponent, {});

    cartRef.afterClosed().subscribe(result => { });
  }

  openAccount() {
    if (localStorage.getItem("JWT") != null) {
      const logoutRef = this.logoutDialog.open(LogoutComponent);
      logoutRef.afterClosed().subscribe();
    }
    else {
      const accountRef = this.accountDialog.open(AccountDialogComponent);
      accountRef.afterClosed().subscribe();
    }
  }

  openOder() {
    if (localStorage.getItem("JWT") != null) {
      const oderRef = this.oderDialog.open(OderDialogComponent);
      oderRef.afterClosed().subscribe();
    }
    else {
      const accountRef = this.accountDialog.open(AccountDialogComponent);
      accountRef.afterClosed().subscribe(
        result => {
          if (result != undefined)
            if (result.check == true)
              this.openOder();
        }
      );
    }
  }

}
