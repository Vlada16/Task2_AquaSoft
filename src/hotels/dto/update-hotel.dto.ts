
import { IsString, IsDecimal, IsOptional } from 'class-validator';

export class UpdateHotelDto {
  @IsString()
  @IsOptional()
  readonly HotelName?: string;

  @IsDecimal()
  @IsOptional()
  readonly Latitude?: number;

  @IsDecimal()
  @IsOptional()
  readonly Longitude?: number;

  @IsString()
  @IsOptional()
  readonly Address?: string;
}
