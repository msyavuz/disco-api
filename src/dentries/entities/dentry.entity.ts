import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("dentries")
export class Dentry {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    dialoguetext: string;

    @Column()
    actor: number;

    @Column()
    conversant: number;

    @PrimaryColumn()
    conversationid: number;

    @Column({ select: false })
    difficultypass: number;

    @Column({ select: false })
    isgroup: boolean;

    @Column({ select: false })
    hascheck: boolean;

    @Column({ select: false })
    sequence: string;

    @Column({ select: false })
    hasalts: boolean;

    @Column({ select: false })
    conditionstring: string;

    @Column({ select: false })
    userscript: string;
}
