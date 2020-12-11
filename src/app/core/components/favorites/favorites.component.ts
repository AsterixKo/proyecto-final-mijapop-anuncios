import { Component, OnInit } from '@angular/core';
import { ProductFavoriteModel } from 'src/app/models/product-favorite.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  productFavorites: ProductFavoriteModel[];

  constructor(private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.mijapopService.findAllProductFavorite().subscribe((data)=>{
      this.productFavorites = data;
      console.log('productFavorites:', this.productFavorites);
    }, (error)=>{
      console.log('error');
    });
  }

}
