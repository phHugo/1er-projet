import { ExpressRouter } from './expressRouter';
import { ExpressServer } from './expressServer';
import { UserJSONService } from '../User/user-json-service';
import { UserService } from '../User/userService';
import * as dotenv from 'dotenv';

export class ExpressApplication {
    private expressRouter!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private userService!: UserService;

    constructor() {
        this.configureApplication();
    }

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureServerPort();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env',
        });
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }

    private configureServices(): void {
        this.userService = new UserJSONService();
    }

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(this.userService);
    }

    private configureServer(): void {
        this.server = new ExpressServer(this.expressRouter, this.port);
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in env file.');
        }

        return port;
    }
}
