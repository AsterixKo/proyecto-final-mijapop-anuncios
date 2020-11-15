export class ProductModel {
    private _id: string;
    private _idCategory: string;
    private _idSubcategory: string;
    private _idUser: string;
    private _userName: string;
    private _name: string;
    private _description: string;
    private _price: number;
    private _currency: string;
    private _productStatus: string;
    private _province: string;
    private _town: string;
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


    constructor(id: string, idCategory: string, idSubcategory: string, idUser: string, userName: string, name: string, description: string, price: number, currency: string, productStatus: string, province: string, town: string, photo1: string, photo2: string, photo3: string, photo4: string, photo5: string, photo6: string, photo7: string, photo8: string, photo9: string, photo10: string) {
        this._id = id;
        this._idCategory = idCategory;
        this._idSubcategory = idSubcategory;
        this._idUser = idUser;
        this._userName = userName;
        this._name = name;
        this._description = description;
        this._price = price;
        this._currency = currency;
        this._productStatus = productStatus;
        this._province = province;
        this._town = town;
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
     * Getter idCategory
     * @return {string}
     */
	public get idCategory(): string {
		return this._idCategory;
	}

    /**
     * Getter idSubcategory
     * @return {string}
     */
	public get idSubcategory(): string {
		return this._idSubcategory;
	}

    /**
     * Getter idUser
     * @return {string}
     */
	public get idUser(): string {
		return this._idUser;
	}

    /**
     * Getter userName
     * @return {string}
     */
	public get userName(): string {
		return this._userName;
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
     * @return {string}
     */
	public get productStatus(): string {
		return this._productStatus;
	}

    /**
     * Getter province
     * @return {string}
     */
	public get province(): string {
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
     * Setter idCategory
     * @param {string} value
     */
	public set idCategory(value: string) {
		this._idCategory = value;
	}

    /**
     * Setter idSubcategory
     * @param {string} value
     */
	public set idSubcategory(value: string) {
		this._idSubcategory = value;
	}

    /**
     * Setter idUser
     * @param {string} value
     */
	public set idUser(value: string) {
		this._idUser = value;
	}

    /**
     * Setter userName
     * @param {string} value
     */
	public set userName(value: string) {
		this._userName = value;
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
     * @param {string} value
     */
	public set productStatus(value: string) {
		this._productStatus = value;
	}

    /**
     * Setter province
     * @param {string} value
     */
	public set province(value: string) {
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