import { SubcategoryModel } from './subcategory.model';

export class CategoryModel {
    private _id: string;
    private _name: string;
    private _description: string;
    private _subcategories: SubcategoryModel[];

	constructor(id: string, name: string, description: string, subcategories: SubcategoryModel[]) {
		this._id = id;
		this._name = name;
		this._description = description;
		this._subcategories = subcategories;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
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
     * Getter subcategories
     * @return {SubcategoryModel[]}
     */
	public get subcategories(): SubcategoryModel[] {
		return this._subcategories;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
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
     * Setter subcategories
     * @param {SubcategoryModel[]} value
     */
	public set subcategories(value: SubcategoryModel[]) {
		this._subcategories = value;
	}

}

