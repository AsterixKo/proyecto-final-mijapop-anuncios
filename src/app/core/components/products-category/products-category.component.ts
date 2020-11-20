import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  category: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El category es:', params['category']);
      console.log(params);
      this.category = params['category'];
    });

    if (this.category != null && this.category != '') {
      console.log('Iniciando búsqueda por category...');
      // this.products = this.mijapop.findProductsByCategory(this.q);
    }
  }

}
