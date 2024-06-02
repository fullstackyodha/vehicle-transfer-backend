import express, { Router } from 'express';
import { createTransfer } from '../controllers/transfer';

class TransferRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/vehicle', createTransfer);

        return this.router;
    }
}

export const transferRoutes: TransferRoutes = new TransferRoutes();
