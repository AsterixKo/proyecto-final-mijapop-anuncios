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

    constructor(id: string, idCategory: string, idSubcategory: string,
        idUser: string, userName: string, name: string, description: string,
        price: number, currency: string, productStatus: string,
        photo1: string, photo2: string, photo3: string,
        photo4: string, photo5: string, photo6: string,
        photo7: string, photo8: string, photo9: string,
        photo10: string) {
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

    get subCategory(): string {
        return this._idSubcategory;
    }

    set subCategory(subCategory: string) {
        this._idSubcategory = subCategory;
    }

    get idUser(): string {
        return this._idUser;
    }

    set idUser(idUser: string) {
        this._idUser = idUser;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
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

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }

    get currency(): string {
        return this._currency;
    }

    set currency(currency: string) {
        this._currency = currency;
    }

    get productStatus(): string {
        return this._productStatus;
    }

    set productStatus(productStatus: string) {
        this._productStatus = productStatus;
    }

    get photo1(): string {
        return this._photo1;
    }

    set photo1(photo1: string) {
        this._photo1 = photo1;
    }

    get photo2(): string {
        return this._photo2;
    }

    set photo2(photo2: string) {
        this._photo2 = photo2;
    }

    get photo3(): string {
        return this._photo3;
    }

    set photo3(photo3: string) {
        this._photo3 = photo3;
    }

    get photo4(): string {
        return this._photo4;
    }

    set photo4(photo4: string) {
        this._photo4 = photo4;
    }

    get photo5(): string {
        return this._photo5;
    }

    set photo5(photo5: string) {
        this._photo5 = photo5;
    }

    get photo6(): string {
        return this._photo6;
    }

    set photo6(photo6: string) {
        this._photo6 = photo6;
    }

    get photo7(): string {
        return this._photo7;
    }

    set photo7(photo7: string) {
        this._photo7 = photo7;
    }

    get photo8(): string {
        return this._photo8;
    }

    set photo8(photo8: string) {
        this._photo8 = photo8;
    }

    get photo9(): string {
        return this._photo9;
    }

    set photo9(photo9: string) {
        this._photo9 = photo9;
    }

    get photo10(): string {
        return this._photo10;
    }

    set photo10(photo10: string) {
        this._photo10 = photo10;
    }
}