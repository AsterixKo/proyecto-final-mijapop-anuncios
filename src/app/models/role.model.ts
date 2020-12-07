import { UserModel } from './user.model';

export class RoleModel {
    private _id: string;
    private _user: UserModel;
    private _name: string;


	constructor(id: string, user: UserModel, name: string) {
		this._id = id;
		this._user = user;
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
     * Getter user
     * @return {UserModel}
     */
	public get user(): UserModel {
		return this._user;
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
     * Setter user
     * @param {UserModel} value
     */
	public set user(value: UserModel) {
		this._user = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}


}