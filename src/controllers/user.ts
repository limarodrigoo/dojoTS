import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';

export default class UserController {
  public async exampleMethod(_req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).end();
  }
}
