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
    this.productStatusArray = this.mijapopService.getAllProductStatus();
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
      // const productNew = new ProductModel(uuid.v4(),);

      // console.log('image:', this.forma.get('image').value);
      // let containsImage = false;
      // if (this.forma.get('image').value) {
      //   console.log('contiene imagen');
      //   containsImage = true;
      // } else {
      //   console.log('No contiene imagen');
      //   containsImage = false;
      // }

      // const userNew = new UserModel(
      //   uuid.v4(),
      //   this.forma.get('email').value,
      //   this.forma.get('password').value,
      //   this.forma.get('name').value,
      //   this.forma.get('lastName').value,
      //   this.forma.get('location').value,
      //   this.forma.get('description').value,
      //   this.forma.get('callSchedule').value,
      //   this.forma.get('phone').value,
      //   '',
      //   this.forma.get('dateBirth').value,
      //   this.forma.get('image').value,
      //   containsImage);
      const email = localStorage.getItem('email');
      let currentUser: UserModel;
      await this.mijapopService.findUserByEmail(email).toPromise().then((data: any) => {
        console.log('data:', data);
        currentUser = data;
      }).catch((error) => {
        console.log('Se ha producido un error:', error);
      });
      this.userName = currentUser.name;
      //Todo descomentar esto y hacerlo mejor
      // const productNew = new ProductModel(
      //   uuid.v4(),
      //   this.forma.get('category').value,
      //   this.forma.get('subcategory').value,
      //   currentUser.id,
      //   currentUser.name,
      //   this.forma.get('name').value,
      //   this.forma.get('description').value,
      //   this.forma.get('price').value,
      //   'euro',
      //   this.forma.get('productStatus').value,
      //   this.forma.get('province').value,
      //   this.forma.get('town').value,
      //   false,
      //   this.forma.get('photo1').value,
      //   this.forma.get('photo2').value,
      //   this.forma.get('photo3').value,
      //   this.forma.get('photo4').value,
      //   this.forma.get('photo5').value,
      //   this.forma.get('photo6').value,
      //   this.forma.get('photo7').value,
      //   this.forma.get('photo8').value,
      //   this.forma.get('photo9').value,
      //   this.forma.get('photo10').value);

      // console.log('Nuevo producto:', productNew);
      // this.mijapopService.addNewProduct(productNew);

      this.forma.reset();

      this.isCorrectUpload = true;
      this.formSubmitAttempt = false;
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
}
