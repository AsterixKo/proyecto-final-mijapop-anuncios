import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { SubcategoryModel } from 'src/app/models/subcategory.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-products-subcategory',
  templateUrl: './products-subcategory.component.html',
  styleUrls: ['./products-subcategory.component.css']
})
export class ProductsSubcategoryComponent implements OnInit {

  subcategoryId: string = '';
  subcategory: SubcategoryModel;
  products: ProductModel[];

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El subcategory es:', params['subcategory']);
      console.log(params);
      this.subcategoryId = params['subcategory'];
    });

    if (this.subcategoryId != null && this.subcategoryId != '') {
      console.log('Iniciando búsqueda por subcategory...');
      this.mijapopService.findSubcategoryById(this.subcategoryId).subscribe((data) => {
        this.subcategory = data;
      }, (error) => {
        console.log('error:', error);
      });
      this.mijapopService.findAllProductsBySubcategoryId(this.subcategoryId).subscribe((data) => {
        this.products = data;
      }, (error) => {
        console.log('error:', error);
      });
    }
  }

}
