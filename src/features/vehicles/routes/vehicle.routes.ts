import express, { Router } from 'express';
import { createVehicle } from '../controllers/create_vehicle';
import { getAllVehicle, getVehicleById } from '../controllers/get_vehicle';
import { getDriverById } from '@/features/drivers/controllers/get_drivers';

class VehicleRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/create', createVehicle);

        this.router.get('/allVehicles', getAllVehicle);

        this.router.get('/:id', getVehicleById);

        return this.router;
    }
}

export const vehicleRoutes: VehicleRoutes = new VehicleRoutes();
