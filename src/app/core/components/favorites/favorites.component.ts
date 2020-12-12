import { Component, OnInit } from '@angular/core';
import { ProductFavoriteModel } from 'src/app/models/product-favorite.model';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  productFavorites: ProductFavoriteModel[];
  currentUser: UserModel;
  constructor(private mijapopService: MijapopService) { }

  ngOnInit(): void {

    this.loadData();

  }

  async loadData() {
    await this.mijapopService.findUserByEmail(localStorage.getItem('email')).toPromise().then((data) => {
      this.currentUser = data;
    }).catch((error) => {
      console.log('error', error);
    });
    this.mijapopService.findAllProductFavoriteByUseId(this.currentUser).subscribe((data) => {
      this.productFavorites = data;
      console.log('productFavorites:', this.productFavorites);
    }, (error) => {
      console.log('error');
    });
  }

}
