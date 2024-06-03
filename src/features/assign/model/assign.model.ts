import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Assigned {
    @PrimaryColumn()
    id: string;

    @Column({ nullable: false })
    vehicle_id: string;

    @Column({ nullable: false })
    driver_id: string;

    @Column({ type: 'timestamp', nullable: false })
    assigned_date: string;

    constructor(id: string, vehicle_id: string, driver_id: string, assigned_date: string) {
        this.id = id;
        this.vehicle_id = vehicle_id;
        this.driver_id = driver_id;
        this.assigned_date = assigned_date;
    }
}
