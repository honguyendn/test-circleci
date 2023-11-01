import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from './interfaces/dog.interface';
import { Request } from 'express';

@Controller('dogs')
export class DogsController {
  constructor(private dogService: DogsService){}

  @Get('abc/:id')
  // @Redirect('https://icons.getbootstrap.com/', 301)
  async findAll(): Promise<Dog[]> {
    return this.dogService.findAll()
  }

  @Post()
  @HttpCode(204)
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogService.create(createDogDto);
  }
}
