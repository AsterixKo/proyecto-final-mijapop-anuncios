import { ConversationModel } from './conversation.model';
import { UserModel } from './user.model';

export class MessageModel {
    private _id: string;
    private _conversation: ConversationModel;
    private _user: UserModel;
    private _userName: string;
    private _text: string;
    private _date: Date;
    private _isChecked: boolean;
    private _isOwner: boolean;


	constructor(id: string, conversation: ConversationModel, user: UserModel, userName: string, text: string, date: Date, isChecked: boolean, isOwner: boolean) {
		this._id = id;
		this._conversation = conversation;
		this._user = user;
		this._userName = userName;
		this._text = text;
		this._date = date;
		this._isChecked = isChecked;
		this._isOwner = isOwner;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter conversation
     * @return {ConversationModel}
     */
	public get conversation(): ConversationModel {
		return this._conversation;
	}

    /**
     * Getter user
     * @return {UserModel}
     */
	public get user(): UserModel {
		return this._user;
	}

    /**
     * Getter userName
     * @return {string}
     */
	public get userName(): string {
		return this._userName;
	}

    /**
     * Getter text
     * @return {string}
     */
	public get text(): string {
		return this._text;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Getter isChecked
     * @return {boolean}
     */
	public get isChecked(): boolean {
		return this._isChecked;
	}

    /**
     * Getter isOwner
     * @return {boolean}
     */
	public get isOwner(): boolean {
		return this._isOwner;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter conversation
     * @param {ConversationModel} value
     */
	public set conversation(value: ConversationModel) {
		this._conversation = value;
	}

    /**
     * Setter user
     * @param {UserModel} value
     */
	public set user(value: UserModel) {
		this._user = value;
	}

    /**
     * Setter userName
     * @param {string} value
     */
	public set userName(value: string) {
		this._userName = value;
	}

    /**
     * Setter text
     * @param {string} value
     */
	public set text(value: string) {
		this._text = value;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Setter isChecked
     * @param {boolean} value
     */
	public set isChecked(value: boolean) {
		this._isChecked = value;
	}

    /**
     * Setter isOwner
     * @param {boolean} value
     */
	public set isOwner(value: boolean) {
		this._isOwner = value;
	}

}

