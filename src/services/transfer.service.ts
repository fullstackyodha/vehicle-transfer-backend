import { AppDataSource } from '@/databaseSetup';
import { Transfers } from '@/features/transfers/models/transfer.model';

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
}
