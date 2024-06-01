import express, { Express } from 'express';
import { Server } from '@/serverSetup';
import connectDB from '@/databaseSetup';
import { cloudinaryConfig } from '@/config';
import 'reflect-metadata';

class VehicleTransferApp {
    public initialize(): void {
        const app: Express = express();

        const server = new Server(app);

        server.start();

        connectDB();

        cloudinaryConfig();
    }
}

export const app: VehicleTransferApp = new VehicleTransferApp();

app.initialize();
