import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser: any;
  
  constructor(private authService: AuthenticationService) {
    this.currentUser = this.authService.getCurrentUser();
  }
}
