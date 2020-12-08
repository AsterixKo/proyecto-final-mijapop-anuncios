import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export class ProductFavoriteModel {
    _id?: string;
    userFavorite?: UserModel;
    product?: ProductModel;

}