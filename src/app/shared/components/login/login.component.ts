import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderNavBarService } from 'src/app/services/header-nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel('', '', '', '', '', '', '', '', '', '', new Date());

  constructor(private auth: AuthService, private router: Router, private headerNavBarService: HeaderNavBarService) { }

  ngOnInit(): void {
  }

  login(data: NgForm) {
    // console.log('Intento de login:');
    // console.log(data);

    // console.log('User', this.user);
    const loginResult = this.auth.login(this.user);
    console.log('El resultado de login result es:', loginResult);

    if (loginResult) {
      this.router.navigateByUrl('/publish');
      this.headerNavBarService.changeNavBar('login');
    } else {
      alert('usuario o contraseña incorrectos. Vuelve a intentarlo');
    }
  }

}
