import { AppDataSource } from '@/databaseSetup';
import { Assigned } from '@/features/assign/model/assign.model';
import console from 'console';

export class AssignService {
    static async assignVehicle(id: string, driver_id: string, vehicle_id: string) {
        try {
            const assignRepository = AppDataSource.getRepository(Assigned);

            const assignedVehicle = await assignRepository.save({
                id,
                driver_id,
                vehicle_id,
                assigned_date: new Date().toISOString()
            });

            return assignedVehicle;
        } catch (error) {
            console.error('Error assigning driver to vehicle.', error);
        }
    }

    static async getAllRecentlyAssignedVehicle() {
        const assignRepository = AppDataSource.getRepository(Assigned);

        const query = `
        SELECT *
        FROM (
            SELECT
                vehicle_id,
                driver_id,
                assigned_date,
                RANK() OVER (PARTITION BY vehicle_id ORDER BY assigned_date DESC) as rank
            FROM assigned
        ) as ranked
        INNER JOIN vehicle ON ranked.vehicle_id = vehicle.id
        INNER JOIN driver ON ranked.driver_id = driver.id
        WHERE rank = 1
    `;

        const assignedVehicle = await assignRepository.query(query);

        return assignedVehicle;
    }
}
