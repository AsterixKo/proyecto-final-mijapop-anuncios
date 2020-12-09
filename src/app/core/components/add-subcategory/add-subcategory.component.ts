import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/models/category.model';
import { SubcategoryModel } from 'src/app/models/subcategory.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  forma: FormGroup;
  isCorrectCreation: Boolean;
  name: string = '';
  categories: CategoryModel[] = [];
  private formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.createForm();
    this.loadNecessaryData();
  }

  createForm() {
    this.forma = this.fb.group({
      category: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', []]
    });
  }

  loadNecessaryData() {
    this.mijapopService.getCategories().subscribe((data) => {
      console.log('data:', data);
      this.categories = data;
      console.log('categories:', this.categories);
    }, (error) => {
      console.log(error);
    });
  }

  saveForm() {
    console.log('Guardando nueva provincia...');
    this.formSubmitAttempt = true;
    this.isCorrectCreation = false;
    console.log(this.forma);

    if (this.forma.status === 'VALID') {

      const subcategoryNew = new SubcategoryModel();
      subcategoryNew.name = this.forma.get('name').value;
      subcategoryNew.description = this.forma.get('description').value;
      const category = new CategoryModel();
      category._id = this.forma.get('category').value;
      subcategoryNew.category = category;

      this.mijapopService.addNewSubategory(subcategoryNew).subscribe((data) => {
        console.log('categoria creada correctamente');
        this.isCorrectCreation = true;
      }, (error) => {
        console.log(error);
      });
      console.log('localStorage.getItem(email)', localStorage.getItem('email'));
      this.mijapopService.findUserByEmail(localStorage.getItem('email')).subscribe((data) => {
        console.log('data:findUserByEmail:', data);
        if (data) {
          this.name = data["name"];
        }
      }, (error) => {
        console.log(error);
      });

      if (this.isCorrectCreation == true) {
        console.log('Formateando formulario');
        this.forma.reset();
      }

    } else {
      if (this.forma.status === 'INVALID') {
        console.log('Formulario INVALID');
      }
    }
  }

  refreshFormValues() {
    this.isCorrectCreation = false;
    this.formSubmitAttempt = false;
    this.forma.reset();
  }

  isFieldInvalid(field: string) {
    return (this.forma.get(field).invalid && this.forma.get(field).touched) ||
      (this.forma.get(field).untouched && this.formSubmitAttempt);
  }

  onCategorySelected(value: string) {
    console.log("the selected category is", value);

  }

}
