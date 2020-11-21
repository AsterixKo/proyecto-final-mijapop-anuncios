import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  isCorrectRegistration: boolean = false;
  private formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private mijapopService: MijapopService) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.mijapopService.existUserByEmailOnForm],
      location: ['', []],
      description: ['', []],
      phone: ['', []],
      callSchedule: ['', []],
      dateBirth: ['', []],
      image: ['', []],
      password: ['', [Validators.required, Validators.minLength(8)]]
      // direccion: this.fb.group({
      //   calle: ['Plaza España', Validators.required],
      //   ciudad: ['Madrid', Validators.required],
      //   pais: ['España', Validators.required]
      // }),
      // hobbies: this.fb.array([
      //   // ['uno'], ['dos'], ['tres']
      // ])
    });
  }

  saveForm() {
    console.log('Guardando nuevo registro de usuario...');
    this.formSubmitAttempt = true;
    console.log(this.forma);

    if (this.forma.status === 'VALID') {
      console.log('image:', this.forma.get('image').value);
      let containsImage = false;
      if (this.forma.get('image').value) {
        console.log('contiene imagen');
        containsImage = true;
      } else {
        console.log('No contiene imagen');
        containsImage = false;
      }

      const userNew = new UserModel(
        uuid.v4(),
        this.forma.get('email').value,
        this.forma.get('password').value,
        this.forma.get('name').value,
        this.forma.get('lastName').value,
        this.forma.get('location').value,
        this.forma.get('description').value,
        this.forma.get('callSchedule').value,
        this.forma.get('phone').value,
        '',
        this.forma.get('dateBirth').value,
        this.forma.get('image').value,
        containsImage);
      this.mijapopService.registerNewUser(userNew);

      this.forma.reset();

      this.isCorrectRegistration= true;
    } else {
      if (this.forma.status === 'INVALID') {
        console.log('Formulario INVALID');
      }
    }



    // this.loadDataToForm();

    // this.forma.reset();
    // this.forma.reset({
    //   nombre: 'Juan',
    //   apellido: 'Marciaaaal'
    // });
  }

  isFieldInvalid(field: string) {
    return (this.forma.get(field).invalid && this.forma.get(field).touched) ||
      (this.forma.get(field).untouched && this.formSubmitAttempt);
  }
}
