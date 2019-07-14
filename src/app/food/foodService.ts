import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private http: HttpClient) {}
  getTypes() {
    return [
      { key: 0, value: "almani" },
      { key: 1, value: "irani" },
      { key: 2, value: "italiai" },
      { key: 3, value: "americai" }
    ];
  }
  delete(data: any) {
    console.log(data);
    return this.http.get("http://localhost:8080/api/Delete?id=" + data);
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
  getImage(data: any) {
    return this.http.get("http://localhost:8080/GetImage?Id=" + data);
  }
  searchSync(data: any) {
    return this.http.post("http://localhost:8080/api/Search", data);
  }
  uploadImage(image: any) {
    return this.http.post("http://localhost:8080/api/upload", image, {
      reportProgress: true,
      responseType: "text"
    });
  }
}
