import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProvinceModel } from 'src/app/models/province.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-products-province',
  templateUrl: './products-province.component.html',
  styleUrls: ['./products-province.component.css']
})
export class ProductsProvinceComponent implements OnInit {

  provinceId: string;
  province: ProvinceModel;
  products: ProductModel[];

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El province es:', params['province']);
      console.log(params);
      this.provinceId = params['province'];

    });

    if (this.provinceId != null && this.provinceId != '') {
      console.log('Iniciando búsqueda por province...');
      this.mijapopService.findProvinceById(this.provinceId).subscribe((data) => {
        this.province = data;
      }, (error) => {
        console.log('error:', error);
      });

      this.mijapopService.findAllProductsByProvinceId(this.provinceId).subscribe((data) => {
        this.products = data;
      }, (error) => {
        console.log('error:', error);
      })
    }

  }

}
