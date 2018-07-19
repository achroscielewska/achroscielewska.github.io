import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contractor } from '../../../models/contractor';
import { AuthService } from '../../../auth/auth.service';
import { ContractorService } from '../../../services/contractors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.sass']
})
export class AddContractorComponent implements OnInit {
  addContractorForm: FormGroup;

  constructor(
    private contractorsService: ContractorService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addContractorForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      newContractorName: new FormControl(null, Validators.required)
    });
  }

  addContractor() {
    const value = this.addContractorForm.value;
    const newContractor = new Contractor (this.authService.user.uid, value.newContractorName);

    this.contractorsService.addContractor(newContractor)

    this.addContractorForm = this.initForm();

    this.router.navigate(['../'], {relativeTo: this.route});
  }



}
