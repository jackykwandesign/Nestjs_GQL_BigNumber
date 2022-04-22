import { Field, ObjectType } from "@nestjs/graphql";
import BigNumber from "bignumber.js";

@ObjectType('Test')
export class TestGQLType{

    @Field()
    name:string

    @Field()
    breed:string

    @Field()
    age:BigNumber
}