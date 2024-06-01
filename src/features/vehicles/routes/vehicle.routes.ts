import express, { Router } from 'express';

class VehicleRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/create');

        return this.router;
    }
}

export const vehicleRoutes: VehicleRoutes = new VehicleRoutes();
