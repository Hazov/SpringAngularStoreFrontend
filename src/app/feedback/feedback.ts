import {User} from '../user/user';

export class Feedback{
  id: number;
  owner: User;
  raiting: number;
  comment: string;
}
