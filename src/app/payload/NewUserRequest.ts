

export class NewUserRequest{
  private email: string;
  private pass: string;
  private name: string;


  constructor(email: string, pass: string, name: string) {
    this.email = email;
    this.pass = pass;
    this.name = name;
  }

}
