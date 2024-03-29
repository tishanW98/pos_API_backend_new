import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Branch } from './schemas/branch.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch.name)
    private branchModel: mongoose.Model<Branch>,
  ) {}

  async findAll(): Promise<Branch[]> {
    const books = await this.branchModel.find();
    return books;
  }

  async create(branch: Branch): Promise<Branch> {
    const res = await this.branchModel.create(branch);
    return res;
  }

  async findById(id: string): Promise<Branch> {
    const branch = await this.branchModel.findById(id);
    if (!branch) {
      throw new NotFoundException('Book not found');
    }
    return branch;
  }

  async updateById(id: string, branch: Branch): Promise<Branch> {
    return await this.branchModel.findByIdAndUpdate(id, branch, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Branch> {
    return await this.branchModel.findByIdAndDelete(id);
  }
}
