import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._user = {};
    this._isAuth = false;
    this._lastQuery = "";
    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setLastQuery(query) {
    this._lastQuery = query;
  }

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get lastQuery() {
    return this._lastQuery;
  }
}
