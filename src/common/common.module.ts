import { Module } from '@nestjs/common';
import { BigNumberScalar } from './bignumber.scalar';

@Module({
    providers:[BigNumberScalar],
    exports:[BigNumberScalar]
})
export class CommonModule {}
