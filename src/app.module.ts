import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { EntitiesModule } from '@/entities/entities.module';
import { PersonModule } from '@/person/person.module';

@Module({
  imports: [EntitiesModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
