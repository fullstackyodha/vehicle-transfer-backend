import { AppDataSource } from '@/databaseSetup';
import { DriverData } from '@/features/drivers/interfaces/drivers.interface';
import { Driver } from '@/features/drivers/models/driver.model';

export class DriverService {
    static async createDriver(id: string, data: DriverData) {
        try {
            const driverData = {
                id,
                name: data.name,
                phone_number: data.phone_number,
                profile_photo: data.profile_photo
            };

            const driverRepository = AppDataSource.getRepository(Driver);

            const driver = driverRepository.create(driverData);

            await driverRepository.save(driver);

            return driver;
        } catch (error) {
            console.error('Error saving driver', error);
        }
    }

    static async findDriverByPhoneNumber(phone_number: string) {
        const driverRepository = AppDataSource.getRepository(Driver);

        const driver = await driverRepository.findOneBy({ phone_number });

        return driver;
    }
}
