import { Profile } from "src/profile/profile.entity";
import { Tweet } from "src/tweet/tweet.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    userName: string


    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        unique: true

    })
    email: string

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        

    })
    password: string

    @CreateDateColumn()
    createdAt: Date


    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToOne(()=>Profile, (profile)=> profile.user,{
        cascade: true,
        eager: true 
    })
    profile?: Profile


    @OneToMany(()=>Tweet,(tweet)=>tweet.user)
    tweets: Tweet[]

}