import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Transfers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    vehicleId: string;

    @Column()
    from: string;

    @Column()
    to: string;

    @Column()
    date: string;

    constructor(vehicleId: string, from: string, to: string, date: string) {
        this.id = uuidv4();
        this.vehicleId = vehicleId;
        this.from = from;
        this.to = to;
        this.date = date;
    }
}
