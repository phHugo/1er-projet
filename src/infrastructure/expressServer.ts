import express from 'express';
import { ExpressRouter } from './expressRouter';

export class ExpressServer {
    private express = express();

    constructor(private expressRouter: ExpressRouter, private port: string) {
        this.express.use('/api', this.expressRouter.router)
    }

    bootstrap(): void {
        this.express.listen(this.port, () => {
            console.log(`> Listening on port ${this.port}`);
        });
    }
}