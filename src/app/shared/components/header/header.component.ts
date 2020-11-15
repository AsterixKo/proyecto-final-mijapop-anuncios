import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderNavBarService } from 'src/app/services/header-nav-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  faSearch = faSearch;
  q: string;//query de búsqueda
  isAuthenticated: boolean;
  subscription: Subscription;

  constructor(private auth: AuthService, private headerNavBarService: HeaderNavBarService) {
    this.subscription = this.headerNavBarService.navBarChanged$.subscribe(
      state => {
        if (state === 'login') {
          console.log('Cambio en header por login');
          this.isAuthenticated = this.auth.isAuth();
        }
        if (state === 'logout') {
          console.log('Cambio en header por login');
          this.isAuthenticated = this.auth.isAuth();
        }
      }
    );
  }

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuth();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
