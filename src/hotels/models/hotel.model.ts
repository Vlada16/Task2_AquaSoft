import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Hotels', timestamps: true })
export class Hotel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  HotelID!: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  HotelName!: string;

  @Column({ type: DataType.DECIMAL(9, 6) })
  Latitude?: number;

  @Column({ type: DataType.DECIMAL(9, 6) })
  Longitude?: number;

  @Column({ type: DataType.TEXT })
  Address?: string;
}
