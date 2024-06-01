import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '@/utils/ErrorHandler';
import { uploadImage } from '@/utils/uploadFiles';
import { VehicleService } from '@/services/vehicles.service';
import { v4 as uuidv4 } from 'uuid';
import HTTP_STATUS from 'http-status-codes';

export const createVehicle = async (req: Request, res: Response, next: NextFunction) => {
    const { vehicleNumber, vehicleType, PUC_certificate, insurance_certificate } = req.body;

    // Find vehicle by number
    const exisitngVehicle = await VehicleService.findVehicleByNumber(vehicleNumber);

    // If number already present throw error
    if (exisitngVehicle) {
        throw new BadRequestError('Vehicle already exisit with this Number');
    }

    // Create new Id
    const id = uuidv4();

    const puc_cert_result = await uploadImage(PUC_certificate, 'puc_certificates', id, true, true);

    const insurance_cert_result = await uploadImage(
        insurance_certificate,
        'insurance_certificates',
        id,
        true,
        true
    );

    if (!puc_cert_result?.public_id || !insurance_cert_result?.public_id) {
        throw new BadRequestError('File upload: Error occured. Try again!!!');
    }

    // Create The Vehicle
    const createdVehicle = await VehicleService.createVehicle(id, {
        vehicleNumber,
        vehicleType,
        PUC_certificate: puc_cert_result.secure_url,
        insurance_certificate: insurance_cert_result.secure_url
    });

    // If vehicle not created throw error
    if (!createdVehicle) {
        throw new BadRequestError('Error Creating Vehicle.');
    }

    // Else return response
    res.status(HTTP_STATUS.OK).json({
        message: 'Vehicle created successfully',
        data: { ...createdVehicle }
    });
};
