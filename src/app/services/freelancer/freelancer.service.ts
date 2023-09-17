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

  public async getFreelancers(): Promise<void> {
    this.isLoading = true;

    try {
      const r = await this.httpService.get('freelancer').toPromise();
      if (Array.isArray(r)) {
        this.freelancers = r.map((item) => new Freelancer(item));
      }
    } catch (_) {
    } finally {
      this.isLoading = false;
    }
  }

  public async addFreelancer(username: string, email: string, phoneNo: string, skillset: string, hobby: string): Promise<void> {
    this.isSubmitting = true;

    try {
      const r = await this.httpService.post('freelancer', {
        'username': username,
        'email': email,
        'phoneNo': phoneNo,
        'skillset': skillset,
        'hobby': hobby
      }).toPromise();

      const response = new FreelancerResponse(r);
      this.freelancers = response.freelancers;
    } catch (e: any) {
      this.errorDialogService.openDialog(e.error.message);
    } finally {
      this.isSubmitting = false;
    }
  }

  public async updateFreelancer(id: number, username: string, email: string, phoneNo: string, skillset: string, hobby: string): Promise<void> {
    this.isSubmitting = true;

    try {
      const r = await this.httpService.put(`freelancer/${id}`, {
        'username': username,
        'email': email,
        'phoneNo': phoneNo,
        'skillset': skillset,
        'hobby': hobby
      }).toPromise();

      const response = new FreelancerResponse(r);
      this.freelancers = response.freelancers;
    } catch (e: any) {
      this.errorDialogService.openDialog(e.error.message);
    } finally {
      this.isSubmitting = false;
    }
  }

  public async deleteFreelancer(id: number): Promise<void> {
    try {
      await this.httpService.delete(`freelancer/${id}`).toPromise();
      this.getFreelancers();
    } catch (_) {
      this.getFreelancers();
    }
  }
}