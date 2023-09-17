import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer/freelancer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  @ViewChild(MatChipInput) chipInput!: MatChipInput;

  constructor(
    public freelancerService: FreelancerService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  
  ngOnInit(): void {
    this.freelancerService.selectedFreelancer = null;

    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required]],
      hobby: [''],
    });
  }

  selectedSkills: string[] = [];
  newSkill: string = '';
  readonly separatorKeysCodes: number[] = [13, 188];

  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedSkills.push(value);
    }
    event.chipInput!.clear();
  }

  removeSkill(value: string): void {
    const index = this.selectedSkills.indexOf(value);
    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
    }
  }

  editSkill(skill: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.removeSkill(skill);
      return;
    }

    const index = this.selectedSkills.indexOf(skill);
    if (index >= 0) {
      this.selectedSkills[index] = value;
    }
  }

  updateForm!: FormGroup;

  public async add() {
    const name = this.updateForm.get('name');
    const email = this.updateForm.get('email');
    const phoneNo = this.updateForm.get('phoneNo');
    const hobby = this.updateForm.get('hobby');
    
    if (this.updateForm.valid) {
      let id: number | null = null;

      const skillset = this.selectedSkills.join(', ');

      await this.freelancerService.addFreelancer(name?.value, email?.value, phoneNo?.value, skillset, hobby?.value);
      this.router.navigate(['/']);
    }
  }
}