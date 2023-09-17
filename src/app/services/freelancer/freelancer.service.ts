import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
import { Freelancer } from 'src/app/models/freelancer.model';
import { FreelancerResponse } from 'src/app/models/freelancer-response.model';
import { ErrorDialogComponent } from 'src/app/pages/components/error-dialog/error-dialog.component';
import { ErrorDialogService } from '../error-dialog/error-dialog.service';

@Injectable({
  providedIn: 'root',
})

export class FreelancerService {
  public isLoading = false;
  public isSubmitting = false;
  public freelancers: Freelancer[] = [];
  public selectedFreelancer: Freelancer | null = null;

  constructor(
    public router: Router,
    private httpService: HttpService,
    private errorDialogService: ErrorDialogService,
  ) {}
  
  public getFreelancers() {
    this.isLoading = true;

    this.httpService.get('freelancer').subscribe(
      (r) => {
        if (Array.isArray(r)) {
          this.freelancers = r.map((item) => new Freelancer(item));
        }
        this.isLoading = false;
      },
      (e) => {
        this.isLoading = false;
      }
    );
  }

  public addFreelancer(username: string, email: string, phoneNo: string, skillset: string, hobby: string) {
    this.isSubmitting = true;

    this.httpService.post('freelancer', {
      'username': username,
      'email': email,
      'phoneNo': phoneNo,
      'skillset': skillset,
      'hobby': hobby
    }).subscribe(
      (r) => {
        const response = new FreelancerResponse(r);
        this.freelancers = response.freelancers;
        this.isSubmitting = false;
      },
      (e) => {
        this.isSubmitting = false;
        this.errorDialogService.openDialog(e.error.message);
      }
    );
  }

  public updateFreelancer(id: number, username: string, email: string, phoneNo: string, skillset: string, hobby: string) {
    this.isSubmitting = true;

    this.httpService.put(`freelancer/${id}`, {
      'username': username,
      'email': email,
      'phoneNo': phoneNo,
      'skillset': skillset,
      'hobby': hobby
    }).subscribe(
      (r) => {
        const response = new FreelancerResponse(r);
        this.freelancers = response.freelancers;
        
        this.isSubmitting = false;
      },
      (e) => {
        this.isSubmitting = false;
        this.errorDialogService.openDialog(e.error.message);
      }
    );
  }

  public deleteFreelancer(id: number) {

    this.httpService.delete(`freelancer/${id}`).subscribe(
      (r) => {
        this.getFreelancers();
      },
      (e) => {
        this.errorDialogService.openDialog(e.error.message);
      }
    );
  }
}