import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Driver {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    phone_number: string;

    @Column()
    profile_photo: string;

    constructor(name: string, phone_number: string, profile_photo: string) {
        this.id = uuidv4();
        this.name = name;
        this.phone_number = phone_number;
        this.profile_photo = profile_photo;
    }
}
