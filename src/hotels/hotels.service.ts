
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from './models/hotel.model';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel) private readonly hotelModel: typeof Hotel) {}

  findAll() {
    return this.hotelModel.findAll();
  }

  findOneByName(name: string) {
    return this.hotelModel.findOne({ where: { HotelName: name } });
  }

  create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelModel.create(createHotelDto as Partial<Hotel>);
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return this.hotelModel.update(updateHotelDto, { where: { HotelID: id } });
  }

  remove(id: number) {
    return this.hotelModel.destroy({ where: { HotelID: id } });
  }
}
