import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { MijapopService } from './mijapop.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private mijapopService: MijapopService) {

  }

  login(user: UserModel) {
    console.log('Datos en el service', user);
    const userFound = this.mijapopService.findUserByEmail(user.email);
    if (userFound) {
      if (user.password == userFound.password) {
        localStorage.setItem('auth', 'true');
        //en el futuro hay que identificar al usuario de alguna forma
        localStorage.setItem('email', user.email);
        return true;
      }
    } else {
      console.log('AuthService:login: usuario no encontrado');
      return false;
    }

    // if (user.email === 'prueba@prueba.com' && user.password === '1234') {
    //   localStorage.setItem('auth', 'true');
    //   //en el futuro hay que identificar al usuario de alguna forma
    //   localStorage.setItem('email', 'prueba@prueba.com');
    //   return true;
    // } else {
    //   return false;
    // }
  }

  isAuth() {
    console.log('AuthService... isAuth');
    console.log('localStorage.getItem(auth):', localStorage.getItem('auth'));

    if (localStorage.getItem('auth') === 'true') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    console.log('AuthService... logout');
    localStorage.removeItem('auth');
    //en el futuro eliminar la identificación del usuario
    localStorage.removeItem('email');
  }
}
