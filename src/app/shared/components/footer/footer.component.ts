import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  categoryArray: CategoryModel[];
  townArray: string[];

  constructor(private mijapopService: MijapopService) { }

  ngOnInit(): void {
    // this.categoryArray = this.mijapopService.getCategories();
    this.mijapopService.getCategories().subscribe((data) => {
      this.categoryArray = data;
    }, (error) => {
      console.log(error);
    });
    this.townArray = this.mijapopService.getTownsFooter();
  }

}
