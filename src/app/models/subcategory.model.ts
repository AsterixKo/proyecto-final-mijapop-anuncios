export class SubcategoryModel {
    private _id: string;
    private _idCategory: string;
    private _name: string;
    private _description: string;

    constructor(id: string,
        idCategory: string,
        name: string,
        description: string) {
        this._id = id;
        this._idCategory = idCategory;
        this._name = name;
        this._description = description;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get idCategory(): string {
        return this._idCategory;
    }

    set idCategory(idCategory: string) {
        this._idCategory = idCategory;
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
}