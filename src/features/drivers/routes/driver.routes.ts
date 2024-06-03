import express, { Router } from 'express';
import { createDriver } from '../controllers/create_driver';
import { getAllDriver, getDriverById } from '../controllers/get_drivers';

class DriverRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/create', createDriver);

        this.router.get('/allDrivers', getAllDriver);

        this.router.get('/:id', getDriverById);

        return this.router;
    }
}

export const driverRoutes: DriverRoutes = new DriverRoutes();
