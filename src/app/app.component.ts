import { HostListener,Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'techfado';
  
  constructor(private router: Router){}

  ngOnInit() {
    

  }
  // @HostListener('window:beforeunload') goToPage() {

  //   this.router.navigate(['dashbord/home']);
  // }

}