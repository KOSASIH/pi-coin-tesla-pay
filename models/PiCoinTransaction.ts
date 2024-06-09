import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PiCoinTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  recipient: string;

  @Column()
  sender: string;

  @Column()
  transactionHash: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
