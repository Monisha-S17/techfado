import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.css']
})
export class InboundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSumbit(){
    console.log('hi');
  }

}
