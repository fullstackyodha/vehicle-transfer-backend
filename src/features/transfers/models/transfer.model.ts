import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Transfers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    vehicle_id: string;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column({ type: 'timestamp' })
    date: string;

    constructor(id: string, vehicle_id: string, from: string, to: string, date: string) {
        this.id = id;
        this.vehicle_id = vehicle_id;
        this.from = from;
        this.to = to;
        this.date = date;
    }
}
