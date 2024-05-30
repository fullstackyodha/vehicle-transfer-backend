import express, { Express } from 'express';
import { Server } from '@/serverSetup';

class VehicleTransferApp {
    public initialize(): void {
        const app: Express = express();

        const server = new Server(app);

        server.start();
    }
}

export const app: VehicleTransferApp = new VehicleTransferApp();

app.initialize();
