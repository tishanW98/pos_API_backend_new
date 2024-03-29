import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Branch {
  @Prop()
  branchName: string;

  @Prop()
  branchAddress: string;

  @Prop()
  locatedCity: string;

  @Prop()
  branchPhone: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
