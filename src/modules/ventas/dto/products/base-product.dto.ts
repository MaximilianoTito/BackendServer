import { CatalogueEntity, PlanningEntity } from '@uic/entities';
import {
  IsNotEmpty,
  IsDate,
  Allow,
  IsPositive,
  IsBoolean,
  isString,
} from 'class-validator';
import { isNotEmptyValidationOptions } from '@shared/validation';


export class BaseProductDto {
  @Allow()
  readonly categoryId: CategoryEntity;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @isString(isNotEmptyValidationOptions())
  readonly title: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly price: number;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @isString(IsStringValidatonOptions())
  readonly image: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly category: number;
  
  @Allow()
  readonly category : CategoryEntity;
}
