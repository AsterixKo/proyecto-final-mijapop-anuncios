import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/models/category.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  forma: FormGroup;
  isCorrectCreation: Boolean;
  name: string = '';
  private formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', []]
    });
  }

  saveForm() {
    console.log('Guardando nueva provincia...');
    this.formSubmitAttempt = true;
    this.isCorrectCreation = false;
    console.log(this.forma);

    if (this.forma.status === 'VALID') {

      const categoryNew = new CategoryModel('', this.forma.get('name').value, this.forma.get('description').value, []);

      this.mijapopService.addNewCategory(categoryNew).subscribe((data) => {
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
}
