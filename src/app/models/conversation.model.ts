import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export class ConversationModel {
    private _id: string;
    private _userOwner: UserModel;
    private _userBuyer: UserModel;
    private _product: ProductModel;
    private _srcPhoto: string;
    private _productName: string;
    private _nameUserBuyer: string;


    constructor(id: string, userOwner: UserModel, userBuyer: UserModel, product: ProductModel, srcPhoto: string, productName: string, nameUserBuyer: string) {
        this._id = id;
        this._userOwner = userOwner;
        this._userBuyer = userBuyer;
        this._product = product;
        this._srcPhoto = srcPhoto;
        this._productName = productName;
        this._nameUserBuyer = nameUserBuyer;
    }


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter userOwner
     * @return {UserModel}
     */
    public get userOwner(): UserModel {
        return this._userOwner;
    }

    /**
     * Getter userBuyer
     * @return {UserModel}
     */
    public get userBuyer(): UserModel {
        return this._userBuyer;
    }

    /**
     * Getter product
     * @return {ProductModel}
     */
    public get product(): ProductModel {
        return this._product;
    }

    /**
     * Getter srcPhoto
     * @return {string}
     */
    public get srcPhoto(): string {
        return this._srcPhoto;
    }

    /**
     * Getter productName
     * @return {string}
     */
    public get productName(): string {
        return this._productName;
    }

    /**
     * Getter nameUserBuyer
     * @return {string}
     */
    public get nameUserBuyer(): string {
        return this._nameUserBuyer;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter userOwner
     * @param {UserModel} value
     */
    public set userOwner(value: UserModel) {
        this._userOwner = value;
    }

    /**
     * Setter userBuyer
     * @param {UserModel} value
     */
    public set userBuyer(value: UserModel) {
        this._userBuyer = value;
    }

    /**
     * Setter product
     * @param {ProductModel} value
     */
    public set product(value: ProductModel) {
        this._product = value;
    }

    /**
     * Setter srcPhoto
     * @param {string} value
     */
    public set srcPhoto(value: string) {
        this._srcPhoto = value;
    }

    /**
     * Setter productName
     * @param {string} value
     */
    public set productName(value: string) {
        this._productName = value;
    }

    /**
     * Setter nameUserBuyer
     * @param {string} value
     */
    public set nameUserBuyer(value: string) {
        this._nameUserBuyer = value;
    }


}