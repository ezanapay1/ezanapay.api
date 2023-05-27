import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MpesaService } from './mpesa.service';
import { CreateMpesaDto } from './dto/create-mpesa.dto';
import { UpdateMpesaDto } from './dto/update-mpesa.dto';

@Controller('mpesa')
export class MpesaController {
  constructor(private readonly mpesaService: MpesaService) {}

  @Post()
  create(@Body() createMpesaDto: CreateMpesaDto) {
    return this.mpesaService.create(createMpesaDto);
  }

  @Get()
  findAll() {
    return this.mpesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mpesaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMpesaDto: UpdateMpesaDto) {
    return this.mpesaService.update(+id, updateMpesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mpesaService.remove(+id);
  }
}
