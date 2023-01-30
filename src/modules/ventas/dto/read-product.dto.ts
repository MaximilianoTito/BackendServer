import { Exclude, Expose } from 'class-transformer';
import { BaseEventDto } from '@uic/dto';
@Exclude()
export class ReadEventDto extends BaseEventDto {
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
