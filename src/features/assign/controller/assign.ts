import { AssignService } from '@/services/assign.service';
import { BadRequestError } from '@/utils/ErrorHandler';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import HTTP_STATUS from 'http-status-codes';

export const assignVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { driver_id, vehicle_id } = req.body;

        const id = uuidv4();

        const assignedDriver = await AssignService.assignVehicle(id, driver_id, vehicle_id);

        if (!assignedDriver) {
            throw new BadRequestError('Error assigning vehicle to the driver.');
        }

        res.status(HTTP_STATUS.OK).json({
            message: 'Vehicle assigned to driver successfully.',
            data: { ...assignedDriver }
        });
    } catch (error) {
        console.log('Error assigning vehicle to the driver.');
    }
};

export const getAllRecentlyAssignedVehicle = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const allAssignedVehicle = await AssignService.getAllRecentlyAssignedVehicle();

        if (!allAssignedVehicle) {
            throw new BadRequestError('Error getting all currently assigned vehicle.');
        }

        res.status(HTTP_STATUS.OK).json({
            data: {
                allAssignedVehicle: [...allAssignedVehicle]
            }
        });
    } catch (err) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: err
        });
    }
};
