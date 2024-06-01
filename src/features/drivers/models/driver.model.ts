import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Driver {
    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    phone_number: string;

    @Column({
        nullable: false
    })
    profile_photo: string;

    constructor(id: string, name: string, phone_number: string, profile_photo: string) {
        this.id = id;
        this.name = name;
        this.phone_number = phone_number;
        this.profile_photo = profile_photo;
    }
}
