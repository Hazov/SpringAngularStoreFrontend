export class JwtResponse {



  private readonly _token:string;
  private readonly _type:string;
  private readonly _id:number;
  private readonly _username:string;
  private readonly _email:string;
  private readonly _roles:string;



  constructor(token: string, type:string, id: number, username: string, email: string, roles: string) {
    this._token = token;
    this._type = type
    this._id = id;
    this._username = username;
    this._email = email;
    this._roles = roles;
  }

  get token(): string {
    return this._token;
  }

  get id(): number {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get roles(): string {
    return this._roles;
  }

  get type(): string {
    return this._type;
  }
}
