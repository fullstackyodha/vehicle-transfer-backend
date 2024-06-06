import { AppDataSource } from '@/databaseSetup';
import { Transfers } from '@/features/transfers/models/transfer.model';
import { query } from 'express';

export class TransferService {
    static async transferVehicle(id: string, from: string, to: string, vehicle_id: string) {
        try {
            const transferData = {
                id,
                vehicle_id,
                from,
                to,
                date: new Date().toISOString()
            };

            const transferRepository = AppDataSource.getRepository(Transfers);

            const transfer = transferRepository.create(transferData);

            await transferRepository.save(transfer);

            return transfer;
        } catch (error) {
            return error;
        }
    }

    static async getTansferHistory(vehicle_id: string) {
        try {
            const transferRepository = AppDataSource.getRepository(Transfers);

            const query = `
                SELECT transfersWithName.from_name,
                       transfersWithName.to_name, transfersWithName.transferDate
                FROM (
                    SELECT tf.date as transferDate, drfrom.name as from_name,
                           drto.name as to_name, tf.vehicle_id as vehicle_id
                    FROM transfers as tf
                    INNER JOIN driver as drfrom ON tf.from = drfrom.id
                    INNER JOIN driver as drto ON tf.to = drto.id
                ) as transfersWithName
                INNER JOIN vehicle as v ON transfersWithName.vehicle_id = v.id
                WHERE transfersWithName.vehicle_id = '${vehicle_id}'
                ORDER BY transfersWithName.transferDate DESC
            `;

            const transferHistory = await transferRepository.query(query);

            return transferHistory;
        } catch (err) {}
    }

    static async getAllTransferedVehicleData() {
        const transferRepository = AppDataSource.getRepository(Transfers);

        const query = `
            SELECT *
            from vehicle
            WHERE vehicle.id IN (
                SELECT vehicle_id
                from transfers
            )
        `;

        const transferedVehicle = await transferRepository.query(query);

        return transferedVehicle;
    }
}
