import express, { Router } from 'express';

class TransferRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/create');

        return this.router;
    }
}

export const transferRoutes: TransferRoutes = new TransferRoutes();
