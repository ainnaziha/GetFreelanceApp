import { Freelancer } from "./freelancer.model";

export class FreelancerResponse {
  message: string | null;
  freelancers: Freelancer[];

  constructor(data: any) {
    this.message = data.message;
    this.freelancers = data.freelancers == null ? [] : data.freelancers.map((item: any) => new Freelancer(item));
  }
}