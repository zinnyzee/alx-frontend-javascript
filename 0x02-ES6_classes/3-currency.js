/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this.code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this.name = val;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
