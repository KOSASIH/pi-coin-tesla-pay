import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeslaVehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vin: string;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
