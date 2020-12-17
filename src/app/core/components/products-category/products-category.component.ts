import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  categoryId: string = '';
  category: CategoryModel;
  products: ProductModel[];

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El category es:', params['category']);
      console.log(params);
      this.categoryId = params['category'];
    });

    if (this.categoryId != null && this.categoryId != '') {
      console.log('Iniciando búsqueda por category...');
      this.mijapopService.findCategoryById(this.categoryId).subscribe((data) => {
        this.category = data;
      }, (error) => {
        console.log('error:', error);
      });
      this.mijapopService.findAllProductsByCategoryId(this.categoryId).subscribe((data) => {
        this.products = data;
      }, (error) => {
        console.log('error:', error);
      });
    }
  }

}
