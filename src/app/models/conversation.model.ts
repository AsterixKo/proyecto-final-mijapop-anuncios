export class ConversationModel {
    private _id: string;
    private _idUserOwner: string;
    private _idUserBuyer: string;
    private _idProduct: string;
    private _srcPhoto: string;
    private _productName: string;
    private _nameUserBuyer: string;

    constructor(id: string,
        idUserOwner: string,
        idUserBuyer: string,
        idProduct: string,
        srcPhoto: string,
        productName: string,
        nameUserBuyer: string) {
        this._id = id;
        this._idUserOwner = idUserOwner;
        this._idUserBuyer = idUserBuyer;
        this._idProduct = idProduct;
        this._srcPhoto = srcPhoto;
        this._productName = productName;
        this._nameUserBuyer = nameUserBuyer
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get idUserOwner(): string {
        return this._idUserOwner;
    }

    set idUserOwner(idUserOwner: string) {
        this._idUserOwner = idUserOwner;
    }

    get idUserBuyer(): string {
        return this._idUserBuyer;
    }

    set idUserBuyer(idUserBuyer: string) {
        this._idUserBuyer = idUserBuyer;
    }

    get idProduct(): string {
        return this._idProduct;
    }

    set idProduct(idProduct: string) {
        this._idProduct = idProduct;
    }

    get srcPhoto(): string {
        return this._srcPhoto;
    }

    set srcPhoto(srcPhoto: string) {
        this._srcPhoto = srcPhoto;
    }

    get productName(): string {
        return this._productName;
    }

    set productName(productName: string) {
        this._productName = productName;
    }

    get nameUserBuyer(): string {
        return this._nameUserBuyer;
    }

    set nameUserBuyer(nameUserBuyer: string) {
        this._nameUserBuyer = nameUserBuyer;
    }
}