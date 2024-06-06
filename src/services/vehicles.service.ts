import { AppDataSource } from '@/databaseSetup';
import { VehicleData } from '@/features/vehicles/interfaces/vehicle.interface';
import { Vehicle } from '@/features/vehicles/models/vehicle.model';

export class VehicleService {
    static async createVehicle(id: string, data: VehicleData) {
        try {
            const vehicleData = {
                id,
                vehicleNumber: data.vehicleNumber,
                vehicleType: data.vehicleType,
                PUC_certificate: data.PUC_certificate,
                insurance_certificate: data.insurance_certificate
            };

            const vehicleRepository = AppDataSource.getRepository(Vehicle);

            const vehicle = vehicleRepository.create(vehicleData);

            await vehicleRepository.save(vehicle);

            return vehicle;
        } catch (error) {
            console.error('Error saving vehicle:', error);
        }
    }

    static async findVehicleByNumber(vehicleNumber: string) {
        const vehicleRepository = AppDataSource.getRepository(Vehicle);

        const vehicle = await vehicleRepository.findOneBy({ vehicleNumber });

        return vehicle;
    }

    static async getAllVehicle() {
        const vehicleRepository = AppDataSource.getRepository(Vehicle);

        const vehicles = await vehicleRepository.find();

        return vehicles;
    }

    static async getVehicleById(id: string) {
        const vehicleRepository = AppDataSource.getRepository(Vehicle);

        const vehicle = await vehicleRepository.findOneBy({ id });

        return vehicle;
    }

    static async getVehicleByNumber(vehicleNumber: string) {
        const vehicleRepository = AppDataSource.getRepository(Vehicle);

        const query = `
            SELECT id
            FROM vehicle
            WHERE "vehicleNumber" = '${vehicleNumber}'
        `;

        const vehicle_id = await vehicleRepository.query(query);

        return vehicle_id[0].id;
    }
}
