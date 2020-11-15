import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderNavBarService } from 'src/app/services/header-nav-bar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private headerNavBarService: HeaderNavBarService) { }

  ngOnInit(): void {
    console.log('logout...');
    this.auth.logout();
    this.headerNavBarService.changeNavBar('logout');
  }

}
