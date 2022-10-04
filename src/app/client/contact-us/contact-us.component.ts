import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  siteKey:string;
  isDisable:boolean =true;
  // formModel = new MyFormModel();
  constructor() {
    this.siteKey ="6LefZVIiAAAAAH_GVszATvltil87Y1uMwcvSPX-9" 
   }

  ngOnInit(): void {
  }
  onSumbit(userForm:NgForm){
    

    console.log(userForm);
    
  }

}
