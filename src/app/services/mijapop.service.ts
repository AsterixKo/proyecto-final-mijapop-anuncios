import { Injectable, OnInit } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { ProvinceModel } from '../models/province.model';
import { SubcategoryModel } from '../models/subcategory.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MijapopService implements OnInit {

  private categoryArray: CategoryModel[] = [];
  private subCategoryArray: SubcategoryModel[] = [];
  private townArray: string[] = [];
  private userArray: UserModel[] = [];
  private provinceArray: ProvinceModel[] = [];

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
    this.subCategoryArray.push(subcategoryCoches1);
    this.subCategoryArray.push(subcategoryCoches2);
    this.subCategoryArray.push(subcategoryCoches3);

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
    this.subCategoryArray.push(subcategoryMotos1);
    this.subCategoryArray.push(subcategoryMotos2);
    this.subCategoryArray.push(subcategoryMotos3);

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

    this.provinceArray.push(new ProvinceModel('1', 'Almería'));
    this.provinceArray.push(new ProvinceModel('2', 'Cádiz'));
    this.provinceArray.push(new ProvinceModel('3', 'Córdoba'));
    this.provinceArray.push(new ProvinceModel('4', 'Granada'));
    this.provinceArray.push(new ProvinceModel('5', 'Huelva'));
    this.provinceArray.push(new ProvinceModel('6', 'Jaén'));
    this.provinceArray.push(new ProvinceModel('7', 'Málaga'));
    this.provinceArray.push(new ProvinceModel('8', 'Sevilla'));
    this.provinceArray.push(new ProvinceModel('9', 'Huesca'));
    this.provinceArray.push(new ProvinceModel('10', 'Teruel'));
    this.provinceArray.push(new ProvinceModel('11', 'Zaragoza'));
    this.provinceArray.push(new ProvinceModel('12', 'Asturias'));
    this.provinceArray.push(new ProvinceModel('13', 'Balears, Illes'));
    this.provinceArray.push(new ProvinceModel('14', 'Palmas, Las'));
    this.provinceArray.push(new ProvinceModel('15', 'Santa Cruz de Tenerife'));
    this.provinceArray.push(new ProvinceModel('16', 'Cantabria'));
    this.provinceArray.push(new ProvinceModel('17', 'Ávila'));
    this.provinceArray.push(new ProvinceModel('18', 'Burgos'));
    this.provinceArray.push(new ProvinceModel('19', 'León'));
    this.provinceArray.push(new ProvinceModel('20', 'Palencia'));
    this.provinceArray.push(new ProvinceModel('21', 'Salamanca'));
    this.provinceArray.push(new ProvinceModel('22', 'Segovia'));
    this.provinceArray.push(new ProvinceModel('23', 'Soria'));
    this.provinceArray.push(new ProvinceModel('24', 'Valladolid'));
    this.provinceArray.push(new ProvinceModel('25', 'Zamora'));
    this.provinceArray.push(new ProvinceModel('26', 'Albacete'));
    this.provinceArray.push(new ProvinceModel('27', 'Ciudad Real'));
    this.provinceArray.push(new ProvinceModel('28', 'Cuenca'));
    this.provinceArray.push(new ProvinceModel('29', 'Guadalajara'));
    this.provinceArray.push(new ProvinceModel('30', 'Toledo'));
    this.provinceArray.push(new ProvinceModel('31', 'Barcelona'));
    this.provinceArray.push(new ProvinceModel('32', 'Girona'));
    this.provinceArray.push(new ProvinceModel('33', 'Lleida'));
    this.provinceArray.push(new ProvinceModel('34', 'Tarragona'));
    this.provinceArray.push(new ProvinceModel('35', 'Alicante/Alacant'));
    this.provinceArray.push(new ProvinceModel('36', 'Castellón/Castelló'));
    this.provinceArray.push(new ProvinceModel('37', 'Valencia/València'));
    this.provinceArray.push(new ProvinceModel('38', 'Badajoz'));
    this.provinceArray.push(new ProvinceModel('39', 'Cáceres'));
    this.provinceArray.push(new ProvinceModel('40', 'Coruña, A'));
    this.provinceArray.push(new ProvinceModel('41', 'Lugo'));
    this.provinceArray.push(new ProvinceModel('42', 'Ourense'));
    this.provinceArray.push(new ProvinceModel('43', 'Pontevedra'));
    this.provinceArray.push(new ProvinceModel('44', 'Madrid'));
    this.provinceArray.push(new ProvinceModel('45', 'Murcia'));
    this.provinceArray.push(new ProvinceModel('46', 'Navarra'));
    this.provinceArray.push(new ProvinceModel('47', 'Araba/Álava'));
    this.provinceArray.push(new ProvinceModel('48', 'Bizkaia'));
    this.provinceArray.push(new ProvinceModel('49', 'Gipuzkoa'));
    this.provinceArray.push(new ProvinceModel('50', 'Rioja, La'));
    this.provinceArray.push(new ProvinceModel('51', 'Ceuta'));
    this.provinceArray.push(new ProvinceModel('52', 'Melilla'));

  }
  ngOnInit(): void {

  }

  getCategories(): CategoryModel[] {
    return this.categoryArray;
  }

  getSubcategoriesByCategoryId(categoryId: string): SubcategoryModel[] {
    console.log('categoryId:' + categoryId);
    console.log('all subcategories:', this.subCategoryArray);
    const subcategoriesFound = this.subCategoryArray.filter((value) => value.idCategory === categoryId);
    console.log('subcategoriesFound:', subcategoriesFound);
    return subcategoriesFound;
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

  findUserByEmail(email: string): UserModel {
    const userArrayFound = this.userArray.filter((value) => value.email === email);
    if (userArrayFound && userArrayFound.length > 0) {
      console.log('Se ha encontrado un usuario con este email', email);
      return userArrayFound[0];
    } else {
      console.log('No se ha encontrado un usuario con este email');
      return null;
    }
  }

  getProvincesOrderedByName(): ProvinceModel[] {
    const provincesOrdered = this.provinceArray.sort((a: ProvinceModel, b: ProvinceModel) => (a.name > b.name) ? 1 : -1);
    return provincesOrdered;
  }
}
