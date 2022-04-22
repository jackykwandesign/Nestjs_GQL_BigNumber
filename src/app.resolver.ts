import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { TestCreateInput } from "./dto/test.dto";
import { TestGQLType } from "./test.entity";

@Resolver()
export class AppResolver {

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => TestGQLType)
  test(
      @Args("testCreateInput")testCreateInput:TestCreateInput
  ){
    return testCreateInput
  }
}