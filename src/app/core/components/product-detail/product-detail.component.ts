import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFavoriteModel } from 'src/app/models/product-favorite.model';
import { ProductModel } from 'src/app/models/product.model';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product: ProductModel;
  isFavorite: boolean = false;
  isMyProduct: boolean = false;
  currentUser: UserModel;
  productFavorite: ProductFavoriteModel;

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  async initializeData() {
    this.route.params.subscribe(params => {
      console.log('El id es:', params['id']);
      console.log(params);
      this.id = params['id'];
    });

    await this.mijapopService.findProductById(this.id).toPromise().then((data) => {
      this.product = data;
      console.log('product:', this.product);
    }).catch((error) => {
      console.log('error:', error);
    });

    await this.mijapopService.findUserByEmail(localStorage.getItem('email')).toPromise().then((data) => {
      this.currentUser = data;
      if (this.currentUser) {
        if (this.currentUser._id == this.product.userOwner._id) {
          this.isMyProduct = true;
        }
      }
    }).catch((error) => {
      console.log(error);
    });

    await this.mijapopService.findProductFavoriteByProductIdAndUserFavoriteId(this.product._id, this.currentUser._id).toPromise().then((data) => {
      console.log('data:', data);
      this.productFavorite = data;
      if (this.productFavorite) {
        this.isFavorite = true;
      }

    }).catch((error) => {
      console.log('ERROR:findProductFavoriteByProductIdAndUserFavoriteId', error);
    });
  }

  saveOnFavorites() {
    const productFavorite = new ProductFavoriteModel();
    productFavorite.product = this.product;
    productFavorite.userFavorite = this.currentUser;
    this.mijapopService.saveOnProductFavorite(productFavorite).subscribe((data) => {
      console.log(data);
      this.productFavorite = data;
      this.isFavorite = true;
    }, (error) => {
      console.log(error);
    });
  }

  deleteFromFavorites() {
    this.mijapopService.deleteFromProductFavorite(this.productFavorite).subscribe((data) => {
      console.log(data);
      this.productFavorite = null;
      this.isFavorite = false;
    }, (error) => {
      console.log(error);
    });
  }

  activateProduct() {
    this.product.isSold = false;
    this.mijapopService.updateProduct(this.product).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  deactivateProduct() {
    this.product.isSold = true;
    this.mijapopService.updateProduct(this.product).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

}
