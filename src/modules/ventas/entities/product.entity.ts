import { async } from "rxjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema: 'ventas'} )
export class ProductEntity{
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @CreateDateColumn({
        name: 'created_date',
        type: 'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createdAt : Date;

    @UpdateDateColumn({
        name: 'updated_date',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',        
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'deleted_date',
        type: 'timestamptz',
        nullable: true,
    })
    deleteAt: Date;

    //RELATIONSHIP

    @ManyToOne(() => CategoryEntity, (category) => category.category)
    category : CategoryEntity;

    @Column('varchar', {
        name: 'title',
        unique: true,
        comment: 'titulo del producto'
    })
    title:string;

    @Column('number', {
        name: 'price',
        comment: 'precio del producto con dos decimales'
    })
    price: number;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'descripcion del producto'
    })
    description: string;

    /*
    @Column('boolean', {
        name: 'state'
    })
    state: boolean;

    @Column('enum', {
        name: 'language',
        enum: 'languageTypeEnum'
    })
    languague: LanguageTypeEnum;
    */

    @BeforeInsert()
    @BeforeUpdate(){
        async setTitle(){
            if(!this.title){
                return;
            }
            this.title = this.title.toUpperCase();
        }

        async hashPassword(){
            if(!this.password){
                return;
            }
            this.password = await Bcrypt.hash(password, 12)
        }
    }

}

