import { CategoryModel } from './category.model';
import { ProductStatusModel } from './product-status.model';
import { ProvinceModel } from './province.model';
import { SubcategoryModel } from './subcategory.model';
import { UserModel } from './user.model';

export class ProductModel {
    _id?: string;
    category?: CategoryModel;
    subcategory?: SubcategoryModel;
    userOwner?: UserModel;
    userNameOwner?: string;
    name?: string;
    description?: string;
    price?: number;
    currency?: string;
    productStatus?: ProductStatusModel;
    province?: ProvinceModel;
    town?: string;
    isSold?: boolean;
    photo1?: string;
    photo2?: string;
    photo3?: string;
    photo4?: string;
    photo5?: string;
    photo6?: string;
    photo7?: string;
    photo8?: string;
    photo9?: string;
    photo10?: string;


}