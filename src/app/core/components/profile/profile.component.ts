import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';
import * as uuid from 'uuid'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  forma: FormGroup;
  isCorrectRegistration: boolean = false;
  name: string = '';
  private formSubmitAttempt: boolean = false;
  currentUser: UserModel;

  constructor(private fb: FormBuilder, private mijapopService: MijapopService) {

  }


  ngOnInit(): void {
    // const email = localStorage.getItem('email');
    // this.currentUser = this.mijapopService.findUserByEmail(email);

    this.createForm();
  }

  async createForm() {
    const email = localStorage.getItem('email');
    let userFound: UserModel;
    await this.mijapopService.findUserByEmail(email).toPromise().then((data) => {
      console.log('data:', data);
      this.currentUser = data;
      console.log('currentUser:', this.currentUser);
    }).catch((error) => {
      console.log('error:', error);
      return false;
    });

    this.forma = this.fb.group({
      name: [this.currentUser.name, [Validators.required, Validators.minLength(3)]],
      lastName: [this.currentUser.lastName],
      email: [this.currentUser.email, []],
      location: [this.currentUser.location, []],
      description: [this.currentUser.description, []],
      phone: [this.currentUser.phone, []],
      callSchedule: [this.currentUser.callSchedule, []],
      dateBirth: [this.currentUser.dateBirth, []],
      image: [this.currentUser.srcImage, []]
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
      this.currentUser.name = this.forma.get('name').value;
      this.currentUser.lastName = this.forma.get('lastName').value;
      this.currentUser.location = this.forma.get('location').value;
      this.currentUser.description = this.forma.get('description').value;
      this.currentUser.callSchedule = this.forma.get('callSchedule').value;
      this.currentUser.phone = this.forma.get('phone').value;
      this.currentUser.dateBirth = this.forma.get('dateBirth').value;
      this.currentUser.srcImage = this.forma.get('image').value;
      this.currentUser.containsImage = containsImage;

      this.mijapopService.changeUserProfile(this.currentUser).subscribe((data) => {
        console.log('changeUserProfile.data:', data);
      }, (error) => {
        console.log('error:', error);
      });
      this.name = this.forma.get('name').value;

      this.forma.reset();

      this.isCorrectRegistration = true;

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
