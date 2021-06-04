import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
//
import {BillComponent} from './component/bill/bill.component';
import { CartComponent } from './component/cart/cart.component';
import {ComputerDialogComponent} from './component/computer-dialog/computer-dialog.component';
import {ComputerComponent} from './component/computer/computer.component';
import {HomeComponent} from './component/home/home.component';
import {ComputersManagerComponent} from './component/computerManager/computerManager.component';
import {ComputerManagerDialogComponent} from './component/computerManager-dialog/computerManager-dialog.component';
import { AccountDialogComponent } from './component/account-dialog/account-dialog.component';
import { LogoutComponent } from './component/logout/logout.component';
import { OderDialogComponent } from './component/oder-dialog/oder-dialog.component';
import { ManagerComponent } from './component/manager/manager.component';
//

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    CartComponent,
    ComputerDialogComponent,
    ComputerComponent,
    HomeComponent,
    ComputerManagerDialogComponent,
    ComputersManagerComponent,
    AccountDialogComponent,
    LogoutComponent,
    OderDialogComponent,
    ManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSortModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    FlexLayoutModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
