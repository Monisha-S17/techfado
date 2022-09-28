import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuVariable:boolean = false;
  menuIconVariable:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(){
    this.menuVariable =! this.menuVariable ;
    this.menuIconVariable =! this.menuIconVariable
  }

}
