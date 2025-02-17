import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPut } from "inversify-express-utils";

import { TYPES } from "../config/inversify.config";
import { IUserService } from "../interfaces/IUserService";

@controller("/users")
export class UserController {
    private readonly userService: IUserService;

    constructor(@inject(TYPES.IUserService) userService: IUserService) {
        this.userService = userService;
    }

    @httpPut("/")
    public signup(req: Request, res: Response) {

    }

}