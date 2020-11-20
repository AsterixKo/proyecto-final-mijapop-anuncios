import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-subcategory',
  templateUrl: './products-subcategory.component.html',
  styleUrls: ['./products-subcategory.component.css']
})
export class ProductsSubcategoryComponent implements OnInit {

  subcategory: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El subcategory es:', params['subcategory']);
      console.log(params);
      this.subcategory = params['subcategory'];
    });

    if (this.subcategory != null && this.subcategory != '') {
      console.log('Iniciando búsqueda por subcategory...');
      // this.products = this.mijapop.findProductsByCategory(this.q);
    }
  }

}
