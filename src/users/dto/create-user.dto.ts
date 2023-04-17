import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  role: Role;
}

enum Role {
  ADMIN = 'Admin',
  TENANT = 'Tenant',
  LANDLORD = 'Landlord',
  PROPERTY_MANAGER = 'PropertyManager',
}
