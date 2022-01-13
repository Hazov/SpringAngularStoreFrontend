export class ForgotChangePasswordRequest {
  private eenc:string;
  private key:string;
  private pass:string;

  constructor(eenc:string, key:string, pass:string) {
    this.eenc = eenc;
    this.key = key;
    this.pass = pass;
  }
}
