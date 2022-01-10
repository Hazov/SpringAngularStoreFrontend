

export class SignUpRequest {
  private name: string;
  private pass: string;
  private email: string;


  constructor(name: string, pass: string, email:string) {
    this.pass = pass;
    this.name = name;
    this.email = email;
  }

}
