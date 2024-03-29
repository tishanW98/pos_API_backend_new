import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './branch/branch.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }) , 
  MongooseModule.forRoot(process.env.DB_URI), 
  BranchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
