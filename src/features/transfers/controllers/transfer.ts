import { Request, Response, NextFunction } from 'express';
import { TransferService } from '@/services/transfer.service';
import { v4 as uuidv4 } from 'uuid';
import { AssignService } from '@/services/assign.service';
import HTTP_STATUS from 'http-status-codes';
import { BadRequestError } from '@/utils/ErrorHandler';

export const createTransfer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { from, to, vehicle_id } = req.body;

        const transferid = uuidv4();

        const createdTransfer = await TransferService.transferVehicle(
            transferid,
            from,
            to,
            vehicle_id
        );

        const assignedDriver = await AssignService.assignVehicle(transferid, to, vehicle_id);

        if (!createdTransfer || !assignedDriver) {
            throw new BadRequestError('Error creating transfer');
        }

        res.status(HTTP_STATUS.OK).json({
            message: 'Vehicle Transfered Successfully.',
            data: { transferid, vehicle_id, from, to }
        });
    } catch (err) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: `${err}`
        });
    }
};

export const getTransferHistoryByVehicleId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { vehicle_id } = req.params;
        const transferHistory = await TransferService.getTansferHistory(vehicle_id);

        res.status(HTTP_STATUS.OK).json({
            message: 'Transfer History',
            data: {
                transfers: transferHistory
            }
        });
    } catch (err) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: `${err}`
        });
    }
};

export const getAllTransferedVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allTransferedvehicles = await TransferService.getAllTransferedVehicleData();

        res.status(HTTP_STATUS.OK).json({
            message: '',
            data: {
                vehicles: allTransferedvehicles
            }
        });
    } catch (err) {}
};
