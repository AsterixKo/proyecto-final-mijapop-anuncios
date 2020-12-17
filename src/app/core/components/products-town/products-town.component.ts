import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-products-town',
  templateUrl: './products-town.component.html',
  styleUrls: ['./products-town.component.css']
})
export class ProductsTownComponent implements OnInit {

  town: string = '';
  products: ProductModel[];

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El town es:', params['town']);
      console.log(params);
      this.town = params['town'];
    });

    if (this.town != null && this.town != '') {
      console.log('Iniciando búsqueda por town...');
      this.mijapopService.findAllProductsByTown(this.town).subscribe((data)=>{
        this.products = data;
      }, (error)=>{
        console.log('error:', error);
      })
    }
  }

}
