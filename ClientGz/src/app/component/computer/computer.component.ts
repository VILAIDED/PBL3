import { Component, OnInit } from '@angular/core';
import { Computer } from '../../model/computer';
import { ComputerService } from '../../service/computer.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ComputerDialogComponent } from '../computer-dialog/computer-dialog.component'

import * as _ from 'lodash';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  constructor(
    private computerService: ComputerService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getComputers();
  }
  
  computers: Computer[] = [];
  getComputers(): void {
    this.computerService.getComputers()
      .subscribe(computers => {
        this.computers = computers;
      });
  }
  search(name: string) {
    const comFind: Computer[] = [];
    this.computers.forEach(function (item) {
      if (item.name.includes(name)) {
        comFind.push(item);
      }
    })

    this.computers = comFind;
  }

  getSort(sort: string) {
    if (sort == "incre") {
      this.computers = _.sortBy(this.computers, ['price']);
    }
    if (sort == "desc") {
      this.computers = _.sortBy(this.computers, ['price']).reverse();
    }
  }

  openDialog(obj) {
    const dialogRef = this.dialog.open(ComputerDialogComponent, {
      data: obj
    });
  }
}
