import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/kurs_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', '6P7tx_p9kAT0xnfmM-GW4iR5L_W4R4ug')

  constructor(private http: HttpClient) {
    this.getTasks()
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.param })
  }

  saveTasks(listTasks: Array<Task>) {
    this.http.put(this.URL_DB, listTasks, { params: this.param })
    .subscribe(list => {
      console.log(list)}
    )
  }

}
