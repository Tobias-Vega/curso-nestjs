import { v7 as uuid7 } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid7(),
    name: 'Volvo',
    createdAt: new Date().getTime()
  },
  {
    id: uuid7(),
    name: 'Honda',
    createdAt: new Date().getTime()
  },
  {
    id: uuid7(),
    name: 'Tesla',
    createdAt: new Date().getTime()
  },
  {
    id: uuid7(),
    name: 'Jeep',
    createdAt: new Date().getTime()
  }
]

