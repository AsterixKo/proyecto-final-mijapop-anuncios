import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-my-products-market',
  templateUrl: './my-products-market.component.html',
  styleUrls: ['./my-products-market.component.css']
})
export class MyProductsMarketComponent implements OnInit {

  products: ProductModel[];
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
    })
    this.mijapopService.findAllProductsByUserOwnerAndIsNotSold(this.currentUser).subscribe((data) => {
      this.products = data;
    }, (error) => {
      console.log(error);
    });
  }

}
