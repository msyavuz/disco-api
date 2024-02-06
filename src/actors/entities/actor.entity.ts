import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("actors")
export class Actor {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    talkativeness: number;
}
