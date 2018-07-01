import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/kurs_db/collections/tasks';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getTasks()

  }

  getParams(): HttpParams {

    const uid = this.authService.user.uid;
    const query = {'userId' : uid};

    return new HttpParams()
    .set('apiKey', '6P7tx_p9kAT0xnfmM-GW4iR5L_W4R4ug')
    .append('q', JSON.stringify(query))
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.getParams() })
  }

  saveTasks(listTasks: Array<Task>) {
    this.http.put(this.URL_DB, listTasks, { params: this.getParams() })
    .subscribe(list => {
      console.log(list)}
    )
  }

}
