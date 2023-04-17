import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  role: Role;
}

enum Role {
  ADMIN = 'Admin',
  TENANT = 'Tenant',
  LANDLORD = 'Landlord',
  PROPERTY_MANAGER = 'PropertyManager',
}
