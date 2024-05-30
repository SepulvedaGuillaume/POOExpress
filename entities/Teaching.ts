class Teaching {
  private _school_id: number;
  private _language_id: number;

  constructor(school_id: number, language_id: number) {
    this._school_id = school_id;
    this._language_id = language_id;
  }

  get school_id() {
    return this._school_id;
  }

  get language_id() {
    return this._language_id;
  }
}

export default Teaching;
