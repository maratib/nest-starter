import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '@/entities/person';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'maratib',
      password: '4344',
      database: 'temp',
      entities: [Person],
    }),
  ],
})
export class EntitiesModule {}
