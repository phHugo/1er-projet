import { Router } from "express";
import { UserController } from "../User/user.controller";
import { UserService } from "../User/userService";
import { UserRouter } from "../User/user.router";

export class ExpressRouter {
    router = Router();

    private userController!: UserController;
    private userRouter!: UserRouter;

    constructor(private userService: UserService) {
        this.configControllers();
        this.configRouters();
        this.configRoutes();     
    }


    private configRouters(): void {
        this.userRouter = new UserRouter(this.userController);
    }

    private configControllers(): void {
        this.userController = new UserController(this.userService);
    }

    private configRoutes(): void {
        this.router.use('/user', this.userRouter.router);
    }
}