import { IsString, IsDecimal, IsInt } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  readonly HotelName: string;

  @IsDecimal()
  readonly Latitude: number;

  @IsDecimal()
  readonly Longitude: number;

  @IsString()
  readonly Address: string;

  @IsInt()
  readonly RegionID: number;

  @IsInt()
  readonly CityID: number;
}
