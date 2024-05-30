import School from "./School";

class Student {
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _birthday: Date;
  private _address: string;
  private _school_id: number;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    birthday: Date,
    address: string,
    school_id: number
  ) {
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthday = birthday;
    this._address = address;
    this._school_id = school_id;
  }

  get id() {
    return this._id;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get birthday() {
    return this._birthday;
  }

  get address() {
    return this._address;
  }

  get school_id() {
    return this._school_id;
  }

  changeSchoolAtEndOfYear(newSchool: School) {
    this._school_id = newSchool.id;
  }
}

export default Student;
