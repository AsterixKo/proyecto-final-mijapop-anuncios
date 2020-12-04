export class ProductStatusModel {
    private _id: string;
    private _idCategory: string;
    private _name: string;


    constructor(id: string, idCategory: string, name: string) {
        this._id = id;
        this._idCategory = idCategory;
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
     * Getter idCategory
     * @return {string}
     */
    public get idCategory(): string {
        return this._idCategory;
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
     * Setter idCategory
     * @param {string} value
     */
    public set idCategory(value: string) {
        this._idCategory = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }



}