import { CategoryModel } from './category.model';

export class SubcategoryModel {
    private _id: string;
    private _category: CategoryModel;
    private _name: string;
    private _description: string;



	constructor(id: string, category: CategoryModel, name: string, description: string) {
		this._id = id;
		this._category = category;
		this._name = name;
		this._description = description;
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
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
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

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}
	

}