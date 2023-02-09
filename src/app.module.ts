import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import typeOrmConfig from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EmployeesModule,
    DepartmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
