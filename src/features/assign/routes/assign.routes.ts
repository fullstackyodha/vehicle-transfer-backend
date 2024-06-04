import express, { Router } from 'express';
import { assignVehicle, getAllRecentlyAssignedVehicle } from '../controller/assign';

class AssignRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/driver', assignVehicle);

        this.router.get('/getAllRecentlyAssignedVehicle', getAllRecentlyAssignedVehicle);

        return this.router;
    }
}

export const assignRoutes: AssignRoutes = new AssignRoutes();
