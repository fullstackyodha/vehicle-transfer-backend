import { DataSource } from 'typeorm';
import { Vehicle } from '@/features/vehicles/models/vehicle.model';
import { Driver } from '@/features/drivers/models/driver.model';

export default function () {
    const connectDB = () => {
        const AppDataSource = new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'test',
            database: 'vehicle_transfer_db',
            synchronize: true,
            logging: true,
            entities: [Vehicle, Driver],
            subscribers: [],
            migrations: []
        });

        AppDataSource.initialize()
            .then(() => {
                console.log('Connected To Database Successfully');
            })
            .catch((err) => {
                console.error('Error Connecting To Database', err);
            });
    };

    connectDB();
}
