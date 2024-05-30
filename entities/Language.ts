class Language {
  private _id: number;
  private _language: string;

  constructor(id: number, language: string) {
    this._id = id;
    this._language = language;
  }

  get id() {
    return this._id;
  }

  get language() {
    return this._language;
  }
}

export default Language;
