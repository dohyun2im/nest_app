import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/entities/user.entity';

export class UserDto extends PickType(UserEntity, ['email', 'password']) {}
