import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private http: HttpClient) {}

  delete(data: any) {
    return this.http.post("http://localhost:8080/api/Delete", data);
  }
  update(data: any) {
    return this.http.post("http://localhost:8080/api/Update", data);
  }
  create(data: any) {
    return this.http.post("http://localhost:8080/api/Create", data);
  }
  showMenu() {
    return this.http.get("http://localhost:8080/api/Menu");
  }
  getDetail(data: any) {
    return this.http.get("http://localhost:8080/api/GetDetail?Id=" + data);
  }
  search(data: any) {
    return this.http.post("http://localhost:8080/api/Search", data);
  }
}
