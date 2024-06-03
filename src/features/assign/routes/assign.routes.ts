import express, { Router } from 'express';
import { assignVehicle, getAllCurrentAssignedVehicle } from '../controller/assign';

class AssignRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/driver', assignVehicle);

        this.router.get('/getCurrentAssignedVehicle', getAllCurrentAssignedVehicle);

        return this.router;
    }
}

export const assignRoutes: AssignRoutes = new AssignRoutes();
