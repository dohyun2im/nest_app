import { Entity, Column, OneToMany } from 'typeorm';
import { CommonPKEntity } from './common.entity';
import { ArticleEntity } from './article.entity';
import { CommentEntity } from './comment.entity';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('User')
export class UserEntity extends CommonPKEntity {
  @ApiProperty({
    example: '유저 이메일입니다.',
    description: '유저 이메일',
    required: true,
  })
  @IsString()
  @Column('varchar', { unique: true, nullable: false })
  email: string;
  @ApiProperty({
    example: '유저 비밀번호입니다.',
    description: '유저 비밀번호',
    required: true,
  })
  @IsString()
  @Column('varchar', { unique: false, nullable: false })
  password: string;

  @OneToMany(() => ArticleEntity, (article) => article.user)
  article: ArticleEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity;
}
