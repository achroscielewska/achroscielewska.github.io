import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/kurs_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', '6P7tx_p9kAT0xnfmM-GW4iR5L_W4R4ug')

  constructor(private http: HttpClient) {
    this.getTasks()
  }

  getTasks() {
    this.http.get(this.URL_DB, { params: this.param })
    .subscribe(tasks => {
      console.log(tasks);
    })
  }
}
