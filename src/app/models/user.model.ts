export class UserModel {
    private _id: string;
    private _email: string;
    private _password: string;
    private _name: string;
    private _lastName: string;
    private _location: string;
    private _description: string;
    private _callSchedule: string;//horario de llamada
    private _phone: string;
    private _gender: string;
    private _dateBirth: Date;

    constructor(id: string,
        email: string,
        password: string,
        name: string,
        lastName: string,
        location: string,
        description: string,
        callSchedule: string,
        phone: string,
        gender: string,
        dateBirth: Date) {
        this._id = id;
        this._email = email;
        this._password = password;
        this._name = name;
        this._lastName = lastName;
        this._location = location;
        this._description = description;
        this._callSchedule = callSchedule;
        this._phone = phone;
        this._gender = gender;
        this._dateBirth = dateBirth;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter lastName
     * @return {string}
     */
    public get lastName(): string {
        return this._lastName;
    }

    /**
     * Getter location
     * @return {string}
     */
    public get location(): string {
        return this._location;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter callSchedule
     * @return {string}
     */
    public get callSchedule(): string {
        return this._callSchedule;
    }

    /**
     * Getter phone
     * @return {string}
     */
    public get phone(): string {
        return this._phone;
    }

    /**
     * Getter gender
     * @return {string}
     */
    public get gender(): string {
        return this._gender;
    }

    /**
     * Getter dateBirth
     * @return {Date}
     */
    public get dateBirth(): Date {
        return this._dateBirth;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter lastName
     * @param {string} value
     */
    public set lastName(value: string) {
        this._lastName = value;
    }

    /**
     * Setter location
     * @param {string} value
     */
    public set location(value: string) {
        this._location = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter callSchedule
     * @param {string} value
     */
    public set callSchedule(value: string) {
        this._callSchedule = value;
    }

    /**
     * Setter phone
     * @param {string} value
     */
    public set phone(value: string) {
        this._phone = value;
    }

    /**
     * Setter gender
     * @param {string} value
     */
    public set gender(value: string) {
        this._gender = value;
    }

    /**
     * Setter dateBirth
     * @param {Date} value
     */
    public set dateBirth(value: Date) {
        this._dateBirth = value;
    }

}