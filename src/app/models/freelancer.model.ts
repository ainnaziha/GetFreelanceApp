export class Freelancer {
    id: number;
    email: string;
    username: string;
    phoneNo: string;
    skillset: string;
    hobby: string;
    isDeleting: boolean = false;
  
    constructor(data: any) {
      this.id = data.id;
      this.email = data.email;
      this.username = data.username;
      this.phoneNo = data.phoneNo;
      this.skillset = data.skillset;
      this.hobby = data.hobby;
    }
  }