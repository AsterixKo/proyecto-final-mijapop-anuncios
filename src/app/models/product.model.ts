import { CategoryModel } from './category.model';
import { ProductStatusModel } from './product-status.model';
import { ProvinceModel } from './province.model';
import { SubcategoryModel } from './subcategory.model';
import { UserModel } from './user.model';

export class ProductModel {
    private _id: string;
    private _category: CategoryModel;
    private _subcategory: SubcategoryModel;
    private _userOwner: UserModel;
    private _userNameOwner: string;
    private _name: string;
    private _description: string;
    private _price: number;
    private _currency: string;
    private _productStatus: ProductStatusModel;
    private _province: ProvinceModel;
    private _town: string;
    private _isSold: boolean;
    private _photo1: string;
    private _photo2: string;
    private _photo3: string;
    private _photo4: string;
    private _photo5: string;
    private _photo6: string;
    private _photo7: string;
    private _photo8: string;
    private _photo9: string;
    private _photo10: string;


	constructor(id: string, category: CategoryModel, subcategory: SubcategoryModel, userOwner: UserModel, userNameOwner: string, name: string, description: string, price: number, currency: string, productStatus: ProductStatusModel, province: ProvinceModel, town: string, isSold: boolean, photo1: string, photo2: string, photo3: string, photo4: string, photo5: string, photo6: string, photo7: string, photo8: string, photo9: string, photo10: string) {
		this._id = id;
		this._category = category;
		this._subcategory = subcategory;
		this._userOwner = userOwner;
		this._userNameOwner = userNameOwner;
		this._name = name;
		this._description = description;
		this._price = price;
		this._currency = currency;
		this._productStatus = productStatus;
		this._province = province;
		this._town = town;
		this._isSold = isSold;
		this._photo1 = photo1;
		this._photo2 = photo2;
		this._photo3 = photo3;
		this._photo4 = photo4;
		this._photo5 = photo5;
		this._photo6 = photo6;
		this._photo7 = photo7;
		this._photo8 = photo8;
		this._photo9 = photo9;
		this._photo10 = photo10;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter category
     * @return {CategoryModel}
     */
	public get category(): CategoryModel {
		return this._category;
	}

    /**
     * Getter subcategory
     * @return {SubcategoryModel}
     */
	public get subcategory(): SubcategoryModel {
		return this._subcategory;
	}

    /**
     * Getter userOwner
     * @return {UserModel}
     */
	public get userOwner(): UserModel {
		return this._userOwner;
	}

    /**
     * Getter userNameOwner
     * @return {string}
     */
	public get userNameOwner(): string {
		return this._userNameOwner;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter currency
     * @return {string}
     */
	public get currency(): string {
		return this._currency;
	}

    /**
     * Getter productStatus
     * @return {ProductStatusModel}
     */
	public get productStatus(): ProductStatusModel {
		return this._productStatus;
	}

    /**
     * Getter province
     * @return {ProvinceModel}
     */
	public get province(): ProvinceModel {
		return this._province;
	}

    /**
     * Getter town
     * @return {string}
     */
	public get town(): string {
		return this._town;
	}

    /**
     * Getter isSold
     * @return {boolean}
     */
	public get isSold(): boolean {
		return this._isSold;
	}

    /**
     * Getter photo1
     * @return {string}
     */
	public get photo1(): string {
		return this._photo1;
	}

    /**
     * Getter photo2
     * @return {string}
     */
	public get photo2(): string {
		return this._photo2;
	}

    /**
     * Getter photo3
     * @return {string}
     */
	public get photo3(): string {
		return this._photo3;
	}

    /**
     * Getter photo4
     * @return {string}
     */
	public get photo4(): string {
		return this._photo4;
	}

    /**
     * Getter photo5
     * @return {string}
     */
	public get photo5(): string {
		return this._photo5;
	}

    /**
     * Getter photo6
     * @return {string}
     */
	public get photo6(): string {
		return this._photo6;
	}

    /**
     * Getter photo7
     * @return {string}
     */
	public get photo7(): string {
		return this._photo7;
	}

    /**
     * Getter photo8
     * @return {string}
     */
	public get photo8(): string {
		return this._photo8;
	}

    /**
     * Getter photo9
     * @return {string}
     */
	public get photo9(): string {
		return this._photo9;
	}

    /**
     * Getter photo10
     * @return {string}
     */
	public get photo10(): string {
		return this._photo10;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter category
     * @param {CategoryModel} value
     */
	public set category(value: CategoryModel) {
		this._category = value;
	}

    /**
     * Setter subcategory
     * @param {SubcategoryModel} value
     */
	public set subcategory(value: SubcategoryModel) {
		this._subcategory = value;
	}

    /**
     * Setter userOwner
     * @param {UserModel} value
     */
	public set userOwner(value: UserModel) {
		this._userOwner = value;
	}

    /**
     * Setter userNameOwner
     * @param {string} value
     */
	public set userNameOwner(value: string) {
		this._userNameOwner = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter currency
     * @param {string} value
     */
	public set currency(value: string) {
		this._currency = value;
	}

    /**
     * Setter productStatus
     * @param {ProductStatusModel} value
     */
	public set productStatus(value: ProductStatusModel) {
		this._productStatus = value;
	}

    /**
     * Setter province
     * @param {ProvinceModel} value
     */
	public set province(value: ProvinceModel) {
		this._province = value;
	}

    /**
     * Setter town
     * @param {string} value
     */
	public set town(value: string) {
		this._town = value;
	}

    /**
     * Setter isSold
     * @param {boolean} value
     */
	public set isSold(value: boolean) {
		this._isSold = value;
	}

    /**
     * Setter photo1
     * @param {string} value
     */
	public set photo1(value: string) {
		this._photo1 = value;
	}

    /**
     * Setter photo2
     * @param {string} value
     */
	public set photo2(value: string) {
		this._photo2 = value;
	}

    /**
     * Setter photo3
     * @param {string} value
     */
	public set photo3(value: string) {
		this._photo3 = value;
	}

    /**
     * Setter photo4
     * @param {string} value
     */
	public set photo4(value: string) {
		this._photo4 = value;
	}

    /**
     * Setter photo5
     * @param {string} value
     */
	public set photo5(value: string) {
		this._photo5 = value;
	}

    /**
     * Setter photo6
     * @param {string} value
     */
	public set photo6(value: string) {
		this._photo6 = value;
	}

    /**
     * Setter photo7
     * @param {string} value
     */
	public set photo7(value: string) {
		this._photo7 = value;
	}

    /**
     * Setter photo8
     * @param {string} value
     */
	public set photo8(value: string) {
		this._photo8 = value;
	}

    /**
     * Setter photo9
     * @param {string} value
     */
	public set photo9(value: string) {
		this._photo9 = value;
	}

    /**
     * Setter photo10
     * @param {string} value
     */
	public set photo10(value: string) {
		this._photo10 = value;
	}

}