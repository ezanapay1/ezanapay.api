import { Module } from '@nestjs/common';
import { MpesaService } from './mpesa.service';
import { MpesaController } from './mpesa.controller';

@Module({
  controllers: [MpesaController],
  providers: [MpesaService]
})
export class MpesaModule {}
