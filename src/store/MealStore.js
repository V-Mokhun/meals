import { makeAutoObservable } from "mobx";

export default class MealStore {
  constructor() {
    this._meals = [];
    this._numberOfMeals = 10;
    this._totalCount = 0;
    this._offset = 0;
    makeAutoObservable(this);
  }

  get numberOfMeals() {
    return this._numberOfMeals;
  }

  get meals() {
    return this._meals;
  }

  get totalCount() {
    return this._totalCount;
  }

  get offset() {
    return this._offset;
  }

  setNumberOfMeals(numberOfMeals) {
    this._numberOfMeals = numberOfMeals;
  }

  setMeals(meals) {
    this._meals = meals;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setOffset(offset) {
    this._offset = offset;
  }
}
