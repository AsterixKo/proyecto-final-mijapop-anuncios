import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-province',
  templateUrl: './products-province.component.html',
  styleUrls: ['./products-province.component.css']
})
export class ProductsProvinceComponent implements OnInit {

  province: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El province es:', params['province']);
      console.log(params);
      this.province = params['province'];
      if (this.province != null && this.province != '') {
        console.log('Iniciando búsqueda por province...');
        // this.products = this.mijapop.findProductsByTown(this.town);
      }
    });

    
  }

}
