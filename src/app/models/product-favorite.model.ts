import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export class ProductFavoriteModel {
    private _id: string;
    private _userFavorite: UserModel;
    private _product: ProductModel;


	constructor(id: string, userFavorite: UserModel, product: ProductModel) {
		this._id = id;
		this._userFavorite = userFavorite;
		this._product = product;
	}


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter userFavorite
     * @return {UserModel}
     */
	public get userFavorite(): UserModel {
		return this._userFavorite;
	}

    /**
     * Getter product
     * @return {ProductModel}
     */
	public get product(): ProductModel {
		return this._product;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter userFavorite
     * @param {UserModel} value
     */
	public set userFavorite(value: UserModel) {
		this._userFavorite = value;
	}

    /**
     * Setter product
     * @param {ProductModel} value
     */
	public set product(value: ProductModel) {
		this._product = value;
	}

}