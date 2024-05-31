import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    vehicleNumber: string;

    @Column()
    vehicleType: string;

    @Column()
    PUC_certificate: string;

    @Column()
    insurance_certificate: string;

    constructor(
        vehicleNumber: string,
        vehicleType: string,
        PUC_certificate: string,
        insurance_certificate: string
    ) {
        this.id = uuidv4();
        this.vehicleNumber = vehicleNumber;
        this.vehicleType = vehicleType;
        this.PUC_certificate = PUC_certificate;
        this.insurance_certificate = insurance_certificate;
    }
}
