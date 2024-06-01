import { Application } from 'express';
import { driverRoutes } from './features/drivers/routes/driver.routes';
import { vehicleRoutes } from './features/vehicles/routes/vehicle.routes';
import { transferRoutes } from './features/transfers/routes/transfer.routes';

export default (app: Application) => {
    const routes = () => {
        app.use('/api/v1/driver', driverRoutes.routes());

        app.use('/api/v1/vechicle', vehicleRoutes.routes());

        app.use('/api/v1/transfer', transferRoutes.routes());
    };

    routes();
};
