import { AppDataSource } from '@/databaseSetup';
import { Assigned } from '@/features/assign/model/asign.model';

export class AssignService {
    static async assignVehicle(id: string, driver_Id: string, vehicle_id: string) {
        try {
            const assignRepository = AppDataSource.getRepository(Assigned);

            const assignedVehicle = await assignRepository.save({
                id,
                driver_Id,
                vehicle_id,
                assigned_date: new Date().toISOString()
            });

            return assignedVehicle;
        } catch (error) {
            console.error('Error assigning driver to vehicle.', error);
        }
    }
}
