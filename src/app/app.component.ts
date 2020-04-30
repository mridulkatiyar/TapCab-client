import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle:string="TAP CAB";
  constructor(public loginService:AuthenticationService)
  {}
  
  title = 'ADMINISTRATOR-TAPCAB ';
}
