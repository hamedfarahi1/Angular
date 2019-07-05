import { Food } from "./Food";
export class SearchResult {
  foods: Food[] = new Food[10]();
  setFoods(f: Food[]) {
    this.foods = f;
  }
}
