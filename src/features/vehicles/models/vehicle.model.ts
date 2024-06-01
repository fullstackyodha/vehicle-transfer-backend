import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryColumn()
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
        id: string,
        vehicleNumber: string,
        vehicleType: string,
        PUC_certificate: string,
        insurance_certificate: string
    ) {
        this.id = id;
        this.vehicleNumber = vehicleNumber;
        this.vehicleType = vehicleType;
        this.PUC_certificate = PUC_certificate;
        this.insurance_certificate = insurance_certificate;
    }
}
