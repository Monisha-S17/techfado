import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  siteKey:string;
  isDisable:boolean =true;
  // formModel = new MyFormModel();
  constructor(private userService:UserService) {
    this.siteKey ="6LefZVIiAAAAAH_GVszATvltil87Y1uMwcvSPX-9" 
   }

  ngOnInit(): void {
  }
  onSumbit(userForm:any){
    
    console.log(userForm);
    let contactValue = userForm.value;
    console.log(contactValue);
    this.userService.sendContactData(contactValue).subscribe((value:any)=>{
        console.log(value);
    })

    
  }

}
