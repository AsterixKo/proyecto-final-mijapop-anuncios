import { SubcategoryModel } from './subcategory.model';

export class CategoryModel {
    private _id: string;
    private _name: string;
    private _description: string;
    private _subcategories: SubcategoryModel [];

    constructor(id: string, name: string, description: string, subcategories: SubcategoryModel []) {

        this._id = id;
        this._name = name;
        this._description = description;
        this._subcategories = subcategories;
         }

         get id(): string {
             return this._id;
         }
        
         set id (id: string) {
            this._id = id;
         }

         get name(): string {
             return this._name;
         }

         set name(name: string) {
             this._name = name;
         }

         get description(): string {
             return this._description;
         }

         set description(description: string) {
             this._description = description;
         }

         get subcategories(): SubcategoryModel[] {
             return this._subcategories;
         }

         set subcategories(subcategories: SubcategoryModel[]) {
             this._subcategories = subcategories;
         }

}   

