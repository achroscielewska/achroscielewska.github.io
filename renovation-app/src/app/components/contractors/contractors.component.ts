import { Contractor } from './../../models/contractor';
import { Component, OnInit, Input } from '@angular/core';
import { ContractorService } from '../../services/contractors.service';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.sass']
})
export class ContractorsComponent implements OnInit {

  @Input()
  contractorsList:Array<Contractor> = [];

  constructor(private contractorsService: ContractorService) {
    this.contractorsService.getContractorsListObs().subscribe((contractors: Array<Contractor>) =>
    this.contractorsList = contractors
    );
   }

  ngOnInit() {
  }

  removeContractor(contractor: Contractor) {
    this.contractorsService.removeContractor(contractor)

  }

  saveInDb() {
    this.contractorsService.saveInDb()
  }

}
