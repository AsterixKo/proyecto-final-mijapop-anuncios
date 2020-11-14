import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  q: string;//query de búsqueda
  isAuthenticated: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuth();
  }

}
