import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-my-products-sold',
  templateUrl: './my-products-sold.component.html',
  styleUrls: ['./my-products-sold.component.css']
})
export class MyProductsSoldComponent implements OnInit {

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
    this.mijapopService.findAllProductsByUserOwnerAndIsSold(this.currentUser).subscribe((data) => {
      this.products = data;
    }, (error) => {
      console.log(error);
    });
  }

}
