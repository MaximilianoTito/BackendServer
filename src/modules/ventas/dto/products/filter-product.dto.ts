import { IsNumber, IsOptional, IsString } from "class-validator";

export class FilterProduuctDto extends PaginationDto {
  @IsOptional()
  @IsString(IsStringValidationOptional())
  readonly title;

  //categoryId
  @IsNumber()
  readonly sort: number;
}