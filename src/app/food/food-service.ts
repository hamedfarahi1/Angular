import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableService } from '../menu/table';
import { KeyValue } from '@angular/common';
import { GetParam } from '../Shared/getParam';

@Injectable({
    providedIn: 'root'
})
export class FoodService implements TableService {
    constructor(private http: HttpClient, private getParam: GetParam) {
    }
    getTypes() {
        return [
            { key: 0, value: 'آلمانی' },
            { key: 1, value: 'ایرانی' },
            { key: 2, value: 'ایتالیایی' },
            { key: 3, value: 'آمریکایی' }
        ];
    }
    delete(data: any) {
        console.log(data);
        return this.http.get('http://localhost:8080/api/Delete?id=' + data);
    }
    update(data: any) {
        return this.http.post('http://localhost:8080/api/Update', data);
    }
    getDetail(data: any) {
        return this.http.get('http://localhost:8080/api/GetDetail?Id=' + data);
    }
    create(data: any) {

        return this.http.post('http://localhost:8080/api/upload', data, {
            reportProgress: true,
            responseType: 'text'
        });
    }
    read(data?: KeyValue<string, string>[]) {

        if (data) {
            return this.http.get(
                'http://localhost:8080/api/foods' +
                this.getParam.get(data)
            );
        }
        return this.http.get('http://localhost:8080/api/foods');
    }
}
