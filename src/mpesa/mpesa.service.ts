import { Injectable } from '@nestjs/common';
import { CreateMpesaDto } from './dto/create-mpesa.dto';
import { UpdateMpesaDto } from './dto/update-mpesa.dto';

@Injectable()
export class MpesaService {
  create(createMpesaDto: CreateMpesaDto) {
    return 'This action adds a new mpesa';
  }

  findAll() {
    return `This action returns all mpesa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mpesa`;
  }

  update(id: number, updateMpesaDto: UpdateMpesaDto) {
    return `This action updates a #${id} mpesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} mpesa`;
  }
}
