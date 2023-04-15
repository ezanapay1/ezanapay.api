import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty()
  name: string;

  @ApiProperty({
    description: 'Type of property',
    example: 'Commercial | Residential | Industrial | Land | Mixed Use',
    required: true,
  })
  type: string;

  @ApiProperty({
    description: 'Number of units in the property',
    example: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10',
    required: true,
  })
  numberOfUnits: number;

  @ApiProperty({
    description: 'Location of the property',
    example:
      'Addis Ababa | Dire Dawa | Bahir Dar | Mekele | Adama | Hawassa | Jimma | Gondar | Bishoftu | Dessie',
    required: true,
  })
  location: string;

  @ApiProperty({
    description: 'Reference number of the property',
    example: '123456789',
    required: true,
  })
  referenceNumber: string;

  //   @ApiProperty({
  //     description: 'Property manager of the property',
  //     example: 'John Doe',
  //     required: true,
  //   })
  //   userId: number | null;
}
