import { ApiProperty } from '@nestjs/swagger';
import { Property } from '@prisma/client';

export class PropertyEntity implements Property {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  numberOfUnits: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  referenceNumber: string;

  @ApiProperty()
  userId: number | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
