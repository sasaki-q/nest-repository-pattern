import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("hc")
  getHello(): string { return "healthy" }
}
