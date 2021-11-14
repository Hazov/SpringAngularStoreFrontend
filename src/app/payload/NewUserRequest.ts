

export class NewUserRequest{
  private login: string;
  private _email: string;
  private pass: string;


  constructor(login: string, email: string, pass: string) {
    this.login = login;
    this._email = email;
    this.pass = pass;
  }

}
