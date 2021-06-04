import { Column, Entity, ObjectIdColumn, ObjectID, CreateDateColumn } from "typeorm";

@Entity('Deals')
class Deal{

    @ObjectIdColumn()
    _id?: ObjectID;

    @CreateDateColumn()
    date?: Date;

    @Column()
    amount: number;

    constructor(amount: number){
        this.amount = amount;
    }
}

export { Deal }