import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8000,
      username: 'nest-ems',
      password: 'emspassword',
      database: 'ems-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
