// https://wanago.io/2021/02/22/api-nestjs-scalar-types-graphql/
// https://stackoverflow.com/questions/70510078/calculations-using-bignumber-js-with-cryptocurrency-prices-often-return-scientif
///  I M P O R T

import { Scalar, CustomScalar } from '@nestjs/graphql';
import BigNumber from 'bignumber.js';
import { Kind, ValueNode } from 'graphql';

///  E X P O R T

@Scalar('BigNumber', (type) => BigNumber)
export class BigNumberScalar implements CustomScalar<string, BigNumber> {
  description = 'BigNumber custom scalar type';

  parseValue(value: string): BigNumber {
    return new BigNumber(value); // value from the client
  }

  serialize(value: BigNumber): string {
    return value.toFixed(); // value sent to the client
  }

  parseLiteral(ast: ValueNode): BigNumber {
    if (ast.kind === Kind.STRING || ast.kind === Kind.INT || ast.kind === Kind.FLOAT) {
      return new BigNumber(ast.value);
    }
    return null;
  }
}