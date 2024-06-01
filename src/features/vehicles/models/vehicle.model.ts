import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryColumn()
    id: string;

    @Column({ nullable: false })
    vehicleNumber: string;

    @Column({ nullable: false })
    vehicleType: string;

    @Column({ nullable: false })
    PUC_certificate: string;

    @Column({ nullable: false })
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
