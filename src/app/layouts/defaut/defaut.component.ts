import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-defaut',
  templateUrl: './defaut.component.html',
  styleUrls: ['./defaut.component.scss']
})
export class DefautComponent implements OnInit{
  
  sideBarOpen = true;


  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
 constructor(
    private _dialog: MatDialog,
  ) {}
  
  
}
