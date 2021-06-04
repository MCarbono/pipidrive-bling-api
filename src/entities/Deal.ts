import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
class Deal{

    @ObjectIdColumn()
    _id?: ObjectID;

    @Column()
    date?: Date;

    @Column()
    amount: number;

    constructor(amount: number){
        this.amount = amount;
    }
}

export { Deal }