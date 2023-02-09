import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async create({ email, isManager, name }: CreateEmployeeDto) {
    const newEmployee = new Employee();

    const employee = await this.employeeRepository.save(
      Object.assign(newEmployee, {
        email,
        isManager,
        name,
      }),
    );

    return employee;
  }

  async findAll() {
    return this.employeeRepository.find();
  }

  async findOne(id: string) {
    return this.employeeRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    });
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  remove(id: string) {
    return this.employeeRepository.delete(id);
  }
}
