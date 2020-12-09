import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  q: string;// query de búsqueda
  products: ProductModel[];

  constructor(private route: ActivatedRoute,
    private mijapop: MijapopService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El q es:', params['q']);
      console.log(params);
      this.q = params['q'];
    });

    if (this.q != null && this.q != '') {
      console.log('Iniciando búsqueda...:', this.q);
      // this.products = this.mijapop.findProductsByQuery(this.q);
    }
  }

}
