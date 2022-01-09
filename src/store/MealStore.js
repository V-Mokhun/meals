import { makeAutoObservable } from "mobx";

export const SORT_OPTIONS = ["POPULARITY", "HEALTHINESS", "PRICE", "TIME", "CALORIES"];

export const CUISINE_OPTIONS = [
  "All",
  "African",
  "American",
  "British",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "Latin American",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

export const TYPE_OPTIONS = [
  "ALL",
  "MAIN COURSE",
  "SIDE DISH",
  "DESSERT",
  "SALAD",
  "BREAKFAST",
  "SOUP",
  "BEVERAGE",
  "SNACK",
  "DRINK",
];

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
