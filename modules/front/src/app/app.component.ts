import {Component} from '@angular/core';
import {CubaRestService} from "./cuba-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginModel = {
    appUrl: 'http://localhost:8080/app/rest/',
    login: null,
    password: null
  };

  loggedIn = false;

  constructor(private cubaRest: CubaRestService) {
  }

  onSubmit() {
    this.cubaRest.login(this.loginModel.appUrl, this.loginModel.login, this.loginModel.password)
      .then(() => {
        this.loggedIn = true;
      })
      .catch(() => {
        alert('Login error');
      });
  }

}
