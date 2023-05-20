import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { PropertyEntity } from 'src/properties/entities/property.entity';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity> | null) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string | null;

  @ApiProperty()
  first_name: string | null;

  @ApiProperty()
  last_name: string | null;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  emailVerified: boolean;

//   @ApiProperty({ required: false, type: PropertyEntity })
//   properties: PropertyEntity;
}

type Role = 'Admin' | 'Tenant' | 'Landlord' | 'PropertyManager';
