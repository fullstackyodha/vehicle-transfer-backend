import express, { Router } from 'express';
import { createVehicle } from '../controllers/create_vehicle';

class VehicleRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/create', createVehicle);

        return this.router;
    }
}

export const vehicleRoutes: VehicleRoutes = new VehicleRoutes();
