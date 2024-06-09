import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PiCoinWallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  address: string;

  @Column()
  balance: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
