import { Controller, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service';

@Controller('email')
@ApiTags('Emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendMail(@Query('email') email: string) {
    const mail = {
      to: email,
      subject: 'Greetings from EzanaPay',
      from: 'em104.ezanapay.com',
      text: 'Welcome to EzanaPay',
      html: '<h1>Welcome to EzanaPay</h1>',
    };

    return this.emailService.send(mail);
  }
}
