import { Exclude, Expose } from 'class-transformer';
import { BaseProductDto } from './base-product.dto';
@Exclude()
export class ReadProductDto extends BaseProductDto {
  @Expose()
  readonly id;

  @Expose()
  readonly title;

  @Expose()
  readonly price;

  @Expose()
  readonly image;

  @Expose()
  readonly description;

  @Expose()
  readonly sort;

  @Expose()
  readonly isEnable;
}
