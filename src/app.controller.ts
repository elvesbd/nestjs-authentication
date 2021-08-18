import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly autService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.autService.login(req.user); // TODO: return JWT access token
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    // TODO: require an BEARER token and validate token
    return req.user;
  }
}
