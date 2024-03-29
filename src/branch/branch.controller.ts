import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { BranchService } from './branch.service';
import { Branch } from './schemas/branch.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('branches')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get()
  async getAllBooks(): Promise<Branch[]> {
    return this.branchService.findAll();
  }

  @Post()
  async createBranch(
    @Body()
    branch,
  ): Promise<Branch> {
    return this.branchService.create(branch);
  }

  @Get(':id')
  async getBranch(
    @Param('id')
    id: string,
  ): Promise<Branch> {
    return this.branchService.findById(id);
  }

  @Put(':id')
  async updateBranch(
    @Param('id')
    id: string,
    @Body()
    branch,
  ): Promise<Branch> {
    return this.branchService.updateById(id, branch);
  }

  @Delete(':id')
  async deleteBranch(
    @Param('id')
    id: string,
  ): Promise<Branch> {
    return this.branchService.deleteById(id);
  }
}
