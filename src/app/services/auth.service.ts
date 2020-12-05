import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { MijapopService } from './mijapop.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private mijapopService: MijapopService) {

  }

  async login(user: UserModel) {
    console.log('Datos en el service', user);
    let userFound: UserModel;
    await this.mijapopService.findUserByEmail(user.email).toPromise().then((data)=>{
      console.log('data:', data);
      console.log('data.password', data["password"]);
      userFound = new UserModel(
        data["_id"],
        data["email"],
        data["password"],
        data["name"],
        data["lastName"],
        data["location"],
        data["description"],
        data["callSchedule"],
        data["phone"],
        data["gender"],
        data["dateBirth"],
        data["srcImage"],
        data["containsImage"]);
    }).catch((error)=>{
      console.log('error:', error);
      return false;
    });
    
    if (userFound) {
      console.log('UserFound:', userFound);
      console.log('user.password', user.password);
      console.log('userFound.password', userFound.password);
      if (user.password == userFound.password) {
        console.log('Autenticado');
        localStorage.setItem('auth', 'true');
        //en el futuro hay que identificar al usuario de alguna forma
        localStorage.setItem('email', user.email);
        return true;
      }
      console.log('no hace el if bien');
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
