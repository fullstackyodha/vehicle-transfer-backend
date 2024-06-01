import express, { Router } from 'express';
import { createDriver } from '../controllers/create_driver';

class DriverRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/create', createDriver);

        return this.router;
    }
}

export const driverRoutes: DriverRoutes = new DriverRoutes();
