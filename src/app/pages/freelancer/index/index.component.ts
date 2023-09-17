import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer.model';
import { ErrorDialogService } from 'src/app/services/error-dialog/error-dialog.service';
import { FreelancerService } from 'src/app/services/freelancer/freelancer.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(
    private freelancerService: FreelancerService,
   ) {}

  ngOnInit() {
    this.freelancerService.selectedFreelancer = null;
    this.freelancerService.getFreelancers();
  }

  get isLoading(): boolean {
    return this.freelancerService.isLoading;
  } 

  get freelancers(): Freelancer[] {
    return this.freelancerService.freelancers;
  }
}