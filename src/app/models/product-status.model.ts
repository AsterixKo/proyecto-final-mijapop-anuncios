import { CategoryModel } from './category.model';

export class ProductStatusModel {
    private _id: string;
    private _category: CategoryModel;
    private _name: string;


	constructor(id: string, category: CategoryModel, name: string) {
		this._id = id;
		this._category = category;
		this._name = name;
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
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
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
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

}