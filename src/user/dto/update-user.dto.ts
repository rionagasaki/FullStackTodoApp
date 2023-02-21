import { IsString, IsOptional } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @IsOptional()
  nickName?: string;
}
