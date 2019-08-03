import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    countryId: number;

    @Column()
    countryName: string;

    @Column()
    population: number;

    @Column()
    area: number;
}
