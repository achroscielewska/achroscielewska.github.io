import { AngularFireAuth } from 'angularfire2/auth';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contractor } from '../models/contractor';
import { RoomsService } from './room.service';


@Injectable()
export class ContractorService {

  contractorListObs = new BehaviorSubject<Array<Contractor>>([]);


  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.contractorListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getContractors()
    .subscribe(contractors => {
      this.contractorListObs.next(contractors);
    });
  }

  getContractorsListObs(): Observable<Array<Contractor>> {
    return this.contractorListObs.asObservable();
  }

  addContractor(contractor: Contractor) {
    const contractorsList = this.contractorListObs.getValue();
    contractorsList.push(contractor); // update
    this.contractorListObs.next(contractorsList);
  }

  removeContractor(contractor: Contractor) {
    const contractorsList = this.contractorListObs.getValue().filter(e => e !== contractor);
    this.contractorListObs.next(contractorsList);
  }

  saveContractorsInDb() {
    this.httpService.saveContractors(this.contractorListObs.getValue());

  }

  saveInDb() {
    this.saveContractorsInDb();
    // this.roomsService.saveRoomsInDb();
  }

}
