import { Injectable, OnInit } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { ProductStatusModel } from '../models/product-status.model';
import { ProductModel } from '../models/product.model';
import { ProvinceModel } from '../models/province.model';
import { SubcategoryModel } from '../models/subcategory.model';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductFavoriteModel } from '../models/product-favorite.model';
import { ConversationModel } from '../models/conversation.model';
import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MijapopService implements OnInit {
  private categoryArray: CategoryModel[] = [];
  private subCategoryArray: SubcategoryModel[] = [];
  private townArray: string[] = [];
  private userArray: UserModel[] = [];
  private provinceArray: ProvinceModel[] = [];
  private productStatusArray: ProductStatusModel[] = [];
  private productsArray: ProductModel[] = [];
  private urlBase: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    //subcategories de coches
    // const subcategoryCoches1 = new SubcategoryModel(
    //   'ec058667-27a2-4f5d-baa0-d2190a5e0cf8',
    //   '62db5d99-2735-4381-9f06-58181dd46689',
    //   'Furgonetas',
    //   'Furgonetas en venta'
    // );
    // const subcategoryCoches2 = new SubcategoryModel(
    //   '4de6c911-c1bf-4104-bd52-fbb91cff4d36',
    //   '62db5d99-2735-4381-9f06-58181dd46689',
    //   'Diesel',
    //   'Coches diesel en venta'
    // );
    // const subcategoryCoches3 = new SubcategoryModel(
    //   'f6519ec7-1c06-45b1-850b-2360e89401c1',
    //   '62db5d99-2735-4381-9f06-58181dd46689',
    //   'Coches eléctricos',
    //   'Coches eléctricos en venta'
    // );
    // //category coches
    // const categoryCoches = new CategoryModel(
    //   '62db5d99-2735-4381-9f06-58181dd46689',
    //   'Coches',
    //   'Coches en venta',
    //   [subcategoryCoches1, subcategoryCoches2, subcategoryCoches3]
    // );
    // this.categoryArray.push(categoryCoches);
    // this.subCategoryArray.push(subcategoryCoches1);
    // this.subCategoryArray.push(subcategoryCoches2);
    // this.subCategoryArray.push(subcategoryCoches3);

    // //subcategories de motos
    // const subcategoryMotos1 = new SubcategoryModel(
    //   'b3d6cea2-685f-4d89-b206-25e6b639b888',
    //   'c1f83b11-4f2a-4ed1-9bf0-791aa6631519',
    //   'Derbi Senda',
    //   'Derbi senda en venta'
    // );
    // const subcategoryMotos2 = new SubcategoryModel(
    //   '3ce5e7f1-87bd-4810-b5c8-0bf949bc944d',
    //   'c1f83b11-4f2a-4ed1-9bf0-791aa6631519',
    //   'Ducati Monster',
    //   'Ducati Monster en venta'
    // );
    // const subcategoryMotos3 = new SubcategoryModel(
    //   '4a0b1d7a-be24-4293-a51c-409de1603817',
    //   'c1f83b11-4f2a-4ed1-9bf0-791aa6631519',
    //   'Gas Gas',
    //   'Gas Gas en venta'
    // );
    // //category motos
    // const categoryMotos = new CategoryModel(
    //   'c1f83b11-4f2a-4ed1-9bf0-791aa6631519',
    //   'Motos',
    //   'Motos en venta',
    //   [subcategoryMotos1, subcategoryMotos2, subcategoryMotos3]
    // );
    // this.categoryArray.push(categoryMotos);
    // this.subCategoryArray.push(subcategoryMotos1);
    // this.subCategoryArray.push(subcategoryMotos2);
    // this.subCategoryArray.push(subcategoryMotos3);

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
      'Las Palmas de Gran Canaria',
    ];

    // const user = new UserModel(
    //   '64414115-079e-4c86-a506-c120ed59f5ae',
    //   'prueba@prueba.com',
    //   '1234',
    //   'Juan',
    //   'García',
    //   'Madrid',
    //   '',
    //   'de 9 ha 13:00',
    //   '73645645',
    //   'hombre',
    //   new Date(),
    //   '',
    //   false
    // );
    // this.userArray.push(user);


    // this.productStatusArray.push(new ProductStatusModel('1', '1', 'Nuevo'));
    // this.productStatusArray.push(new ProductStatusModel('2', '1', 'Como nuevo'));
    // this.productStatusArray.push(new ProductStatusModel('3', '1', 'Bueno'));
    // this.productStatusArray.push(new ProductStatusModel('4', '1', 'Aceptable'));
    // this.productStatusArray.push(new ProductStatusModel('5', '1', 'Lo ha dado todo'));

  }
  ngOnInit(): void { }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.urlBase + 'categories/');
  }

  getSubcategoriesByCategoryId(categoryId: string): Observable<SubcategoryModel[]> {
    return this.http.get<SubcategoryModel[]>(this.urlBase + `subcategories/category/${categoryId}`);
  }

  getTownsFooter(): string[] {
    return this.townArray;
  }

  registerNewUser(userNew: UserModel): boolean {
    let result = false;
    this.http.post(this.urlBase + 'users/', userNew).subscribe(
      (data) => {
        console.log(data);
        result = true;
      },
      (error) => {
        console.log(error);
      }
    );

    // if (userNew) {
    //   const userArrayFound = this.userArray.filter(
    //     (value) => value.email === userNew.email
    //   );
    //   if (userArrayFound && userArrayFound.length > 0) {
    //     console.log('El email ya existe');
    //     result = false;
    //   } else {
    //     console.log('El email no existe, se crea el usuario nuevo');
    //     this.userArray.push(userNew);
    //     result = true;
    //   }
    // } else {
    //   console.log('Registering empty user');
    //   result = false;
    // }
    return result;
  }

  existUserByEmail(email: string): boolean {
    console.log('existUserByEmail');
    let result = false;
    this.http.get(this.urlBase + 'users/email/' + email).subscribe(
      (data) => {
        console.log(data);
        result = true;
      },
      (error) => {
        console.log(error);
      }
    );

    // if (email) {
    //   if (this.userArray) {
    //     const userArrayFound = this.userArray.filter(
    //       (value) => value.email === email
    //     );
    //     if (userArrayFound && userArrayFound.length > 0) {
    //       console.log('El email ya existe');
    //       result = false;
    //     } else {
    //       console.log('El email no existe');
    //       result = true;
    //     }
    //   } else {
    //     result = false;
    //   }
    // } else {
    //   console.log('Checking empty email');
    //   result = false;
    // }
    return result;
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

  findUserByEmail(email: string): Observable<UserModel> {

    return this.http.get<UserModel>(this.urlBase + 'users/email/' + email);
    // const userArrayFound = this.userArray.filter(
    //   (value) => value.email === email
    // );
    // if (userArrayFound && userArrayFound.length > 0) {
    //   console.log('Se ha encontrado un usuario con este email', email);
    //   return userArrayFound[0];
    // } else {
    //   console.log('No se ha encontrado un usuario con este email');
    //   return null;
    // }
  }
  changeUserProfile(userUpdated: UserModel): Observable<UserModel> {
    console.log('changeUserProfile:', userUpdated);
    console.log('userUpdated.id:', userUpdated._id);
    return this.http.put<UserModel>(this.urlBase + 'users/' + userUpdated._id, userUpdated);
    // this.http.put(this.urlBase + 'users/' + userUpdated.id, userUpdated).subscribe((data) => {
    //   console.log('changeUserProfile.data:', data);
    // }, (error) => {
    //   console.log('error:', error);
    // });
    // //Find index of specific object using findIndex method.
    // let objIndex = this.userArray.findIndex((obj) => obj.email === userUpdated.email);

    // //Log object to Console.
    // console.log('Before update: ', this.userArray[objIndex]);

    // //Update object's name property.
    // this.userArray[objIndex] = userUpdated;

    // //Log object to console again.
    // console.log('After update: ', this.userArray[objIndex]);
  }

  getProvincesOrderedByName(): Observable<ProvinceModel[]> {
    return this.http.get<ProvinceModel[]>(this.urlBase + 'provinces/');
    // const provincesOrdered = this.provinceArray.sort((a: ProvinceModel, b: ProvinceModel) => (a.name > b.name) ? 1 : -1);
    // return provincesOrdered;
  }

  getAllProductStatus(): Observable<ProductStatusModel[]> {
    return this.http.get<ProductStatusModel[]>(this.urlBase + 'productStatus/');
  }

  addNewProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.urlBase + 'products/', product);
  }

  addNewProvince(province: ProvinceModel): Observable<ProvinceModel> {
    return this.http.post<ProvinceModel>(this.urlBase + 'provinces/', province);
  }

  addNewCategory(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.urlBase + 'categories/', category);
  }

  addNewSubategory(subcategory: SubcategoryModel): Observable<SubcategoryModel> {
    return this.http.post<SubcategoryModel>(this.urlBase + 'subcategories/', subcategory);
  }

  addNewProductStatus(productStatus: ProductStatusModel): Observable<ProductStatusModel> {
    return this.http.post<ProductStatusModel>(this.urlBase + 'productStatus/', productStatus);
  }

  findProductBySearch(query: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + 'products/search/' + query);
  }

  findProductById(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.urlBase + 'products/' + id);
  }

  findProductFavoriteByProductIdAndUserFavoriteId(productId: string, userId: string): Observable<ProductFavoriteModel> {
    return this.http.get<ProductFavoriteModel>(this.urlBase + `productFavorites/productAndUser/${productId}/${userId}`);
  }

  saveOnProductFavorite(productFavorite: ProductFavoriteModel): Observable<ProductFavoriteModel> {
    return this.http.post<ProductFavoriteModel>(this.urlBase + 'productFavorites/', productFavorite);
  }

  deleteFromProductFavorite(productFavorite: ProductFavoriteModel): Observable<ProductFavoriteModel> {
    return this.http.delete<ProductFavoriteModel>(this.urlBase + 'productFavorites/' + productFavorite._id);
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put(this.urlBase + `products/${product._id}`, product);
  }

  findAllProductFavoriteByUseId(user: UserModel): Observable<ProductFavoriteModel[]> {
    return this.http.get<ProductFavoriteModel[]>(this.urlBase + `productFavorites/user/${user._id}`);
  }

  findAllProductsByUserOwnerAndIsSold(userModel: UserModel): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + `products/userOwnerAndIsSold/${userModel._id}`);
  }

  findAllProductsByUserOwnerAndIsNotSold(userModel: UserModel): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + `products/userOwnerAndIsNotSold/${userModel._id}`);
  }

  addNewConversation(conversation: ConversationModel): Observable<ConversationModel> {
    return this.http.post<ConversationModel>(this.urlBase + 'conversations/', conversation);
  }

  findConversationsByUserOwnerIdOrUserBuyerId(idUserOwner: string, idUserBuyer: string): Observable<ConversationModel[]> {
    return this.http.get<ConversationModel[]>(this.urlBase + `conversations/userOwnerIdOrUserBuyerId/${idUserOwner}/${idUserBuyer}`);
  }

  findConversationById(idConversation: string): Observable<ConversationModel> {
    return this.http.get<ConversationModel>(this.urlBase + `conversations/${idConversation}`);
  }

  addNewMessage(message: MessageModel): Observable<MessageModel> {
    return this.http.post(this.urlBase + 'messages/', message);
  }

  findMessagesByConversationId(conversationId: string): Observable<MessageModel[]> {
    return this.http.get<MessageModel[]>(this.urlBase + `messages/conversationId/${conversationId}`);
  }

  findAllProductsByCategoryId(categoryId: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + `products/category/${categoryId}`);
  }

  findCategoryById(categoryId: string): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(this.urlBase + `categories/${categoryId}`);
  }

  findSubcategoryById(subcategoryId: string): Observable<SubcategoryModel> {
    return this.http.get<SubcategoryModel>(this.urlBase + `subcategories/${subcategoryId}`);
  }

  findAllProductsBySubcategoryId(subcategoryId: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + `products/subcategory/${subcategoryId}`);
  }

  findProvinceById(provinceId: string): Observable<ProvinceModel> {
    return this.http.get<ProvinceModel>(this.urlBase + `provinces/${provinceId}`);
  }

  findAllProductsByProvinceId(provinceId: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + `products/province/${provinceId}`);
  }
}
