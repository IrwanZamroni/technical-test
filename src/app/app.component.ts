import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username:any;
  constructor(private router: Router) {
   

      const usernames = localStorage.getItem('usrInfo');
      this.username = JSON.parse(usernames || "null");
 

   

  }

  
  isRootRoute(): boolean {
    return this.router.url === '/authentication/login';
  }
   ngOnInit(): void {
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
 
    isDropdownOpen: boolean = false;
  
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
 
  
}

