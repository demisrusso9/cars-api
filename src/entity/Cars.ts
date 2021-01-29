import {
   Column,
   CreateDateColumn,
   Entity,
   PrimaryGeneratedColumn,
   UpdateDateColumn
} from 'typeorm'

@Entity()
export class Cars {
   @PrimaryGeneratedColumn()
   id: number

   @Column('varchar', { length: 40 })
   brand: string

   @Column('varchar', { length: 40 })
   model: string

   @Column('int')
   year: number

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date
}
