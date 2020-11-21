import { Injectable, OnInit } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { SubcategoryModel } from '../models/subcategory.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MijapopService implements OnInit {

  private categoryArray: CategoryModel[] = [];
  private townArray: string[] = [];
  private userArray: UserModel[] = [];

  constructor() {
    //subcategories de coches
    const subcategoryCoches1 = new SubcategoryModel('ec058667-27a2-4f5d-baa0-d2190a5e0cf8', '62db5d99-2735-4381-9f06-58181dd46689', 'Furgonetas', 'Furgonetas en venta');
    const subcategoryCoches2 = new SubcategoryModel('4de6c911-c1bf-4104-bd52-fbb91cff4d36', '62db5d99-2735-4381-9f06-58181dd46689', 'Diesel', 'Coches diesel en venta');
    const subcategoryCoches3 = new SubcategoryModel('f6519ec7-1c06-45b1-850b-2360e89401c1', '62db5d99-2735-4381-9f06-58181dd46689', 'Coches eléctricos', 'Coches eléctricos en venta');
    //category coches
    const categoryCoches = new CategoryModel('62db5d99-2735-4381-9f06-58181dd46689', 'Coches', 'Coches en venta',
      [subcategoryCoches1,
        subcategoryCoches2,
        subcategoryCoches3]);
    this.categoryArray.push(categoryCoches);

    //subcategories de motos
    const subcategoryMotos1 = new SubcategoryModel('b3d6cea2-685f-4d89-b206-25e6b639b888', 'c1f83b11-4f2a-4ed1-9bf0-791aa6631519', 'Derbi Senda', 'Derbi senda en venta');
    const subcategoryMotos2 = new SubcategoryModel('3ce5e7f1-87bd-4810-b5c8-0bf949bc944d', 'c1f83b11-4f2a-4ed1-9bf0-791aa6631519', 'Ducati Monster', 'Ducati Monster en venta');
    const subcategoryMotos3 = new SubcategoryModel('4a0b1d7a-be24-4293-a51c-409de1603817', 'c1f83b11-4f2a-4ed1-9bf0-791aa6631519', 'Gas Gas', 'Gas Gas en venta');
    //category motos
    const categoryMotos = new CategoryModel('c1f83b11-4f2a-4ed1-9bf0-791aa6631519', 'Motos', 'Motos en venta',
      [subcategoryMotos1,
        subcategoryMotos2,
        subcategoryMotos3]);
    this.categoryArray.push(categoryMotos);

    this.townArray = [
      'Madrid',
      'Barcelona',
      'Valencia',
      'Sevilla',
      'Zaragoza',
      'Málaga',
      'Alicante',
      'Bilbao',
      'Valladolid',
      'Móstoles',
      'Alcalá de Henares',
      'Gijón',
      'A Coruña',
      'Granada',
      'Sabadell',
      'Vigo',
      'Getafe',
      'Leganés',
      'Burgos',
      'Badalona',
      'Palma de Mallorca',
      'Murcia',
      'Córdoba',
      'Oviedo',
      'Elche',
      'Santander',
      'Salamanca',
      "L'Hospitalet de Llobregat",
      'Tarragona',
      'Girona',
      'Pamplona',
      'Almería',
      'Donostia-San Sebastián',
      'Las Palmas de Gran Canaria'
    ];

    const user = new UserModel('64414115-079e-4c86-a506-c120ed59f5ae', 'prueba@prueba.com', '1234', 'Juan', 'García', 'Madrid', '', 'de 9 ha 13:00', '73645645', 'hombre', new Date(), '', false);
    this.userArray.push(user);
  }
  ngOnInit(): void {

  }

  getCategories(): CategoryModel[] {
    return this.categoryArray;
  }

  getTownsFooter(): string[] {
    return this.townArray;
  }

  registerNewUser(userNew: UserModel): boolean {
    let result = false;
    if (userNew) {
      const userArrayFound = this.userArray.filter((value) => value.email === userNew.email);
      if (userArrayFound && userArrayFound.length > 0) {
        console.log('El email ya existe');
        result = false;
      } else {
        console.log('El email no existe, se crea el usuario nuevo');
        this.userArray.push(userNew);
        result = true;
      }
    } else {
      console.log('Registering empty user');
      result = false;
    }
    return true;
  }

  existUserByEmail(email: string): boolean {
    let result = false;
    if (email) {
      if (this.userArray) {
        const userArrayFound = this.userArray.filter((value) => value.email === email);
        if (userArrayFound && userArrayFound.length > 0) {
          console.log('El email ya existe');
          result = false;
        } else {
          console.log('El email no existe');
          result = true;
        }
      } else {
        result = false;
      }
    } else {
      console.log('Checking empty email');
      result = false;
    }
    return true;
  }

  // //v1
  // existUserByEmailOnForm(control) {

  //   return new Promise((resolve, reject) => {
  //     if (control.value) {
  //       if (this.userArray) {
  //         const userArrayFound = this.userArray.filter((value) => value.email === control.value);
  //         if (userArrayFound && userArrayFound.length > 0) {
  //           console.log('El email ya existe');
  //           resolve({ emailExists: true });
  //         }
  //       }
  //     }
  //     resolve(null);
  //   });
  // }

  //v2
  existUserByEmailOnForm(control) {

    // if (control.value === 'jvr.moneo@gmail.com') {
    //   return { existUserByEmailOnForm: true };
    // } else {
    //   return { existUserByEmailOnForm: false };
    // }

    return new Promise((resolve, reject) => {
      
      // if (control.value) {
      //   if (this.userArray) {
      //     const userArrayFound = this.userArray.filter((value) => value.email === control.value);
      //     if (userArrayFound && userArrayFound.length > 0) {
      //       console.log('El email ya existe');
      //       resolve({ existUserByEmailOnForm: true });
      //     }
      //   }
      // }
      resolve(null);
    });
  }
}
