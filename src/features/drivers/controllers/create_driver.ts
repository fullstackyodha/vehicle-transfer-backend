import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { DriverService } from '@/services/drivers.service';
import { BadRequestError } from '@/utils/ErrorHandler';
import HTTP_STATUS from 'http-status-codes';
import { uploadImage } from '@/utils/uploadFiles';

export const createDriver = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, phone_number, profile_photo } = req.body;

        // Find driver by phone number
        const exisitngDriver = await DriverService.findDriverByPhoneNumber(phone_number);

        // If phone number already present throw error
        if (exisitngDriver) {
            throw new BadRequestError('Driver already exisit with this Phone Number');
        }

        // Create new Id
        const id = uuidv4();

        const result = await uploadImage(profile_photo, 'profile_photos', id, true, true);

        if (!result?.public_id) {
            throw new BadRequestError('File upload: Error occured. Try again!!!');
        }

        // Create The Driver
        const createdDriver = await DriverService.createDriver(id, {
            name,
            phone_number,
            profile_photo: `${result?.secure_url}`
        });

        // If driver not created throw error
        if (!createdDriver) {
            throw new BadRequestError('Error Creating Driver.');
        }

        // Else return response
        res.status(HTTP_STATUS.OK).json({
            message: 'Driver created successfully',
            data: { ...createdDriver }
        });
    } catch (err) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            error: err
        });
    }
};
