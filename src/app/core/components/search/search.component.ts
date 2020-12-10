import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { MijapopService } from 'src/app/services/mijapop.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  q: string;// query de búsqueda
  products: ProductModel[];

  constructor(private route: ActivatedRoute,
    private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  async initializeData() {
    this.route.params.subscribe(params => {
      console.log('El q es:', params['q']);
      console.log(params);
      this.q = params['q'];

      this.mijapopService.findProductBySearch(this.q).subscribe((data) => {
        this.products = data;
        console.log('products:', this.products);
      }, (error) => {
        console.log('error:', error);
      });
    });

    if (this.q != null && this.q != '') {
      console.log('Iniciando búsqueda...:', this.q);
      // this.products = this.mijapop.findProductsByQuery(this.q);
    }
  }

}
