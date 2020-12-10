import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product: ProductModel;

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  async initializeData() {
    this.route.params.subscribe(params => {
      console.log('El id es:', params['id']);
      console.log(params);
      this.id = params['id'];

      this.mijapopService.findProductById(this.id).subscribe((data) => {
        this.product = data;
        console.log('product:', this.product);
      }, (error) => {
        console.log('error:', error);
      });
    });

  }

}
