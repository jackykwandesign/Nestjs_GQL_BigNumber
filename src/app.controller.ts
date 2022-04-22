import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestCreateInput } from './dto/test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  test(
    @Body() testDto: TestCreateInput
  ){
    return testDto
  }
}
