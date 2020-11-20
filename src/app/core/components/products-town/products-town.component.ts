import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-town',
  templateUrl: './products-town.component.html',
  styleUrls: ['./products-town.component.css']
})
export class ProductsTownComponent implements OnInit {

  town: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El town es:', params['town']);
      console.log(params);
      this.town = params['town'];
    });

    if (this.town != null && this.town != '') {
      console.log('Iniciando búsqueda por town...');
      // this.products = this.mijapop.findProductsByTown(this.town);
    }
  }

}
