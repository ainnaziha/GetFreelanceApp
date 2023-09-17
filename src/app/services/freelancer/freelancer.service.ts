import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})

export class FreelancerService {
  public isLoading = false;
  public isSubmitting = false;

  constructor(
    public router: Router,
    private httpService: HttpService,
  ) {}
  
  public getFreelancers() {
    this.isLoading = true;

    this.httpService.post('', {}).subscribe(
      (r) => {
        // if (r['data'] != null) {
        //   const user = new User(r['data']);
        //   localStorage.setItem('user', JSON.stringify(user));
        //   this.isLoggingIn = false;
        //   this.router.navigate(['/home']);
        // }
      },
      (e) => {
        this.isLoading = false;
        //this.errorDialogService.openDialog(e.error.message);
      }
    );
  }

  public addFreelancer() {
    this.isSubmitting = true;

    this.httpService.post('', {}).subscribe(
      (r) => {
        // if (r['data'] != null) {
        //   const user = new User(r['data']);
        //   localStorage.setItem('user', JSON.stringify(user));
        //   this.isLoggingIn = false;
        //   this.router.navigate(['/home']);
        // }
      },
      (e) => {
        this.isSubmitting = false;
        //this.errorDialogService.openDialog(e.error.message);
      }
    );
  }

  public updateFreelancer() {
    this.isSubmitting = true;

    this.httpService.post('', {}).subscribe(
      (r) => {
        // if (r['data'] != null) {
        //   const user = new User(r['data']);
        //   localStorage.setItem('user', JSON.stringify(user));
        //   this.isLoggingIn = false;
        //   this.router.navigate(['/home']);
        // }
      },
      (e) => {
        this.isSubmitting = false;
        //this.errorDialogService.openDialog(e.error.message);
      }
    );
  }

  public deleteFreelancer() {
    this.isSubmitting = true;

    this.httpService.post('', {}).subscribe(
      (r) => {
        // if (r['data'] != null) {
        //   const user = new User(r['data']);
        //   localStorage.setItem('user', JSON.stringify(user));
        //   this.isLoggingIn = false;
        //   this.router.navigate(['/home']);
        // }
      },
      (e) => {
        this.isSubmitting = false;
        //this.errorDialogService.openDialog(e.error.message);
      }
    );
  }
}