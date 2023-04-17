import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PropertiesModule } from './properties/properties.module';
import { UsersModule } from './users/users.module';
import { UnitsModule } from './units/units.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, PropertiesModule, UsersModule, UnitsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
