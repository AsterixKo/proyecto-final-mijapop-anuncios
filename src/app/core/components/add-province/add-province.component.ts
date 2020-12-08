import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinceModel } from 'src/app/models/province.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css']
})
export class AddProvinceComponent implements OnInit {

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
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  async saveForm() {
    console.log('Guardando nueva provincia...');
    this.formSubmitAttempt = true;
    this.isCorrectCreation = false;
    console.log(this.forma);

    if (this.forma.status === 'VALID') {

      const provinceNew = new ProvinceModel();
      provinceNew.name=this.forma.get('name').value;
      await this.mijapopService.addNewProvince(provinceNew).subscribe((data) => {
        console.log('provincia creada correctamente');
        this.isCorrectCreation = true;
      }, (error) => {
        console.log(error);
      });
      console.log('localStorage.getItem(email)', localStorage.getItem('email'));
      await this.mijapopService.findUserByEmail(localStorage.getItem('email')).subscribe((data) => {
        console.log('data:findUserByEmail:', data);
        if (data) {
          this.name = data["name"];
        }
      }, (error) => {
        console.log(error);
      });

      if (this.isCorrectCreation ==true) {
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
