import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: CategoryModel[];

  constructor(private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.mijapopService.getCategories().subscribe((data) => {
      this.categories = data;
    }, (error) => {
      console.log(error);
    });
  }

}
