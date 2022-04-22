import { IsNotEmpty, IsString } from "class-validator";
import BigNumber from "bignumber.js";
import { Transform } from "class-transformer";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TestCreateInput{
    
    @IsString()
    @Field()
    name: string;

    @IsNotEmpty()
    @Transform(val => new BigNumber(val.value))
    @Field()
    age: BigNumber;

    @IsString()
    @Field()
    breed: string;
}