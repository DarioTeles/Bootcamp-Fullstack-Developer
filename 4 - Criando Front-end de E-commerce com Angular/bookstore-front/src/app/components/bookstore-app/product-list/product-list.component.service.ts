import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ProductListComponentService{

    private url = "https://api.itbook.store/1.0/search/mongodb";
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }


    constructor(private http: HttpClient){

    }

    getBook(){

        return this.http.get(this.url);
    } 
}