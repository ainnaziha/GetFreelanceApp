export class Freelancer {
    id: number;
    email: string;
    username: string;
    phoneNo: string;
    skillset: string[];
    hobby: string;
  
    constructor(data: any) {
      this.id = data.id;
      this.email = data.email;
      this.username = data.username;
      this.phoneNo = data.phoneNo;
      this.skillset = data.skillset.split(' | ');
      this.hobby = data.hobby;
    }
  }