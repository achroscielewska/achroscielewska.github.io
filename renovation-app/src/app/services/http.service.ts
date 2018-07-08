import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/kurs_db/collections/rooms';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getRooms()

  }

  getParams(): HttpParams {

    const uid = this.authService.user.uid;
    const query = {'userId' : uid};

    return new HttpParams()
    .set('apiKey', '6P7tx_p9kAT0xnfmM-GW4iR5L_W4R4ug')
    .append('q', JSON.stringify(query))
  }

  getRooms(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>(this.URL_DB, { params: this.getParams() })
  }

  saveRooms(listRooms: Array<Room>) {
    this.http.put(this.URL_DB, listRooms, { params: this.getParams() })
    .subscribe(list => {
      console.log(list)}
    )
  }

}
