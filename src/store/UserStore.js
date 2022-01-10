import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._user = {};
    this._isAuth = false;
    this._lastQuery = "";
    this._favoriteMeals = [];
    makeAutoObservable(this);
  }

  setUser = (user) => {
    this._user = user;
  };

  setIsAuth = (bool) => {
    this._isAuth = bool;
  };

  setLastQuery = (query) => {
    this._lastQuery = query;
  };

  setFavoriteMeals = (favoriteMeals) => {
    this._favoriteMeals = favoriteMeals;
  };

  addFavoriteMeal = (favoriteMeal) => {
    this._favoriteMeals.push(favoriteMeal);
  };

  removeFavoriteMeal = (id) => {
    this._favoriteMeals = this.favoriteMeals.filter((meal) => meal.id !== id);
  };

  isMealInFavoriteMeals = (id) => {
    if (this._favoriteMeals.length < 1) return false;

    return this._favoriteMeals.filter((favMeal) => id === favMeal.id).length > 0;
  };

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get lastQuery() {
    return this._lastQuery;
  }

  get favoriteMeals() {
    return this._favoriteMeals;
  }
}
