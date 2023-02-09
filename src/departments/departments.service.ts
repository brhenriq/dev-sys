import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create({ name }: CreateDepartmentDto) {
    const newDepartment = new Department();

    const department = await this.departmentRepository.save(
      Object.assign(newDepartment, {
        name,
      }),
    );

    return department;
  }

  async findAll() {
    return this.departmentRepository.find();
  }

  async findOne(id: string) {
    return this.departmentRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    });
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentRepository.update(id, updateDepartmentDto);
  }

  async remove(id: string) {
    return this.departmentRepository.delete(id);
  }
}
