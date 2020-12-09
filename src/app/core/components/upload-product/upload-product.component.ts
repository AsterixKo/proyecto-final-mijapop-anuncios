import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/models/product.model';
import { UserModel } from 'src/app/models/user.model';
import { CategoryModel } from 'src/app/models/category.model';
import { MijapopService } from 'src/app/services/mijapop.service';
import * as uuid from 'uuid';
import { SubcategoryModel } from 'src/app/models/subcategory.model';
import { ProvinceModel } from 'src/app/models/province.model';
import { ProductStatusModel } from 'src/app/models/product-status.model';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css']
})
export class UploadProductComponent implements OnInit {

  forma: FormGroup;
  isCorrectUpload: boolean = false;
  userName: string = '';
  productName: string = '';
  categories: CategoryModel[] = [];
  subcategories: SubcategoryModel[] = [];
  provinces: ProvinceModel[] = [];
  productStatusArray: ProductStatusModel[] = [];
  errorInApi: boolean = false;
  private formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.createForm();
    this.loadNecessaryData();
  }

  loadNecessaryData() {

    this.mijapopService.getProvincesOrderedByName().subscribe((data) => {
      // console.log('provinces:',data);
      this.provinces = data;
      // console.log(this.provinces);
    }, (error) => {
      console.log(error);
    });

    this.mijapopService.getCategories().subscribe((data) => {
      this.categories = data;
    }, (error) => {
      console.log(error);
    });
    this.mijapopService.getAllProductStatus().subscribe((data) => {
      this.productStatusArray = data;
    }, (error) => {
      console.log(error);
    });
  }

  createForm() {
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern("^\\d+(\\.\\d{1,2})?$")]],
      description: ['', []],
      category: [null, [Validators.required]],
      subcategory: [null, [Validators.required]],
      province: [null, [Validators.required]],
      town: [null, [Validators.required]],
      productStatus: [null, [Validators.required]],
      photo1: ['', [Validators.required]],
      photo2: ['', []],
      photo3: ['', []],
      photo4: ['', []],
      photo5: ['', []],
      photo6: ['', []],
      photo7: ['', []],
      photo8: ['', []],
      photo9: ['', []],
      photo10: ['', []]
    });
  }


  async saveForm() {
    console.log('saveForm de nuevo producto...');
    this.formSubmitAttempt = true;
    console.log(this.forma);

    if (this.forma.status === 'VALID') {
      console.log('Formulario valido');

      const email = localStorage.getItem('email');
      let currentUser: UserModel;
      await this.mijapopService.findUserByEmail(email).toPromise().then((data: any) => {
        console.log('data:', data);
        currentUser = data;
      }).catch((error) => {
        console.log('Se ha producido un error:', error);
      });
      this.userName = currentUser.name;

      //creamos el producto
      const category = new CategoryModel();
      category._id = this.forma.get('category').value;
      const subcategory = new SubcategoryModel();
      subcategory._id = this.forma.get('subcategory').value;
      const productStatus = new ProductStatusModel();
      productStatus._id = this.forma.get('productStatus').value;
      const province = new ProvinceModel();
      province._id = this.forma.get('province').value;

      const productNew = new ProductModel();
      productNew.category = category;
      productNew.subcategory = subcategory;
      productNew.userOwner = currentUser;
      productNew.userNameOwner = currentUser.name;
      productNew.name = this.forma.get('name').value;
      productNew.description = this.forma.get('description').value;
      productNew.price = this.forma.get('price').value;
      productNew.currency = 'euro';
      productNew.productStatus = productStatus;
      productNew.province = province;
      productNew.town = this.forma.get('town').value;
      productNew.isSold = false;
      productNew.photo1 = this.forma.get('photo1').value;
      productNew.photo2 = this.forma.get('photo2').value;
      productNew.photo3 = this.forma.get('photo3').value;
      productNew.photo4 = this.forma.get('photo4').value;
      productNew.photo5 = this.forma.get('photo5').value;
      productNew.photo6 = this.forma.get('photo6').value;
      productNew.photo7 = this.forma.get('photo7').value;
      productNew.photo8 = this.forma.get('photo8').value;
      productNew.photo9 = this.forma.get('photo9').value;
      productNew.photo10 = this.forma.get('photo10').value;

      console.log('Nuevo producto:', productNew);
      await this.mijapopService.addNewProduct(productNew).toPromise().then((data) => {
        console.log('producto subido correctamente');
        this.forma.reset();
        this.isCorrectUpload = true;
        this.formSubmitAttempt = false;
        this.errorInApi = false;
      }).catch((error) => {
        console.log(error);
        this.errorInApi = true;
      });

    } else {
      if (this.forma.status === 'INVALID') {
        console.log('Formulario INVALID');
      }
    }
  }

  isFieldInvalid(field: string) {
    return (this.forma.get(field).invalid && this.forma.get(field).touched) ||
      (this.forma.get(field).untouched && this.formSubmitAttempt);
  }

  onCategorySelected(value: string) {
    console.log("the selected category is", value);
    this.mijapopService.getSubcategoriesByCategoryId(value).subscribe((data) => {
      this.subcategories = data;
    }, (error) => {

    });
  }

  refreshIsCorrectUpload() {
    this.isCorrectUpload = false;
  }

  refreshWithErrorInApi() {
    this.forma.reset();
    this.isCorrectUpload = false;
    this.formSubmitAttempt = false;
    this.errorInApi = false;
  }
}
