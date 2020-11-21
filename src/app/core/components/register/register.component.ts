import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
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

    // const userNew = new UserModel();
    // this.mijapopService.registerNewUser();

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
