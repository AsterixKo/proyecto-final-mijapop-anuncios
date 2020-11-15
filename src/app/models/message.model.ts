export class MessageModel {
    private _id: string;
    private _conversation: string;
    private _idUser: string;
    private _userName: string;
    private _text: string;
    private _date: Date;
    private _isChecked: boolean;
    private _isOwner: boolean;

    constructor(id: string, conversation: string, idUser: string, userName: string, text: string, date: Date, isChecked: boolean, isOwner: boolean) {
        this._id = id;
        this._conversation = conversation;
        this._idUser = idUser;
        this._userName = userName;
        this._text = text;
        this._date = date;
        this._isChecked = isChecked;
        this._isOwner = isOwner;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get conversation(): string {
        return this._conversation;
    }

    set conversation(conversaton: string) {
        this._conversation = conversaton;
    }

    get idUser(): string {
        return this._idUser;
    }

    set idUser(idUser: string) {
        this._userName;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
    }

    get text(): string {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
    }

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }

    get isChecked(): boolean {
        return this._isChecked;
    }

    set isChecked(isChecked: boolean) {
        this._isChecked = isChecked;
    }

    get isOwner(): boolean {
        return this._isOwner;
    }

    set isOwner(isOwner: boolean) {
        this._isOwner = isOwner;
    }
}

