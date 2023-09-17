import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer.model';
import { FreelancerService } from 'src/app/services/freelancer/freelancer.service';
  
  @Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
  })
  export class UserCardComponent {
    constructor(
      private freelancerService: FreelancerService,
      private router: Router,
    ) {}

    @Input() user!: Freelancer;

    public delete() {
     this.freelancerService.deleteFreelancer(this.user.id);
    }

    public update() {
      this.freelancerService.selectedFreelancer = this.user;
      this.router.navigate(['/update', this.user.id]);
    }
  }