import { Type } from './nestjs-common-type';

export interface MappedType<T> extends Type<T> {
  new (): T;
}
