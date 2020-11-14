import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user: UserModel) {
    console.log('Datos en el service', user);
    if (user.email === 'prueba@prueba.com' && user.password === '1234') {
      localStorage.setItem('auth', 'true');
      //en el futuro hay que identificar al usuario de alguna forma
      localStorage.setItem('email', 'prueba@prueba.com');
      return true;
    } else {
      return false;
    }
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
