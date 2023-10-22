import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CommonPKEntity } from './common.entity';
import { UserEntity } from './user.entity';
import { CommentEntity } from './comment.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Entity('Article')
export class ArticleEntity extends CommonPKEntity {
  @ApiProperty({
    example: '게시글 제목입니다.',
    description: '게시글 제목',
    required: true,
  })
  @IsString()
  @Column('varchar', { unique: false, nullable: false })
  title: string;

  @ApiProperty({
    example: '게시글 내용입니다.',
    description: '게시글 내용',
    required: true,
  })
  @IsString()
  @Column('text', { unique: false, nullable: false })
  content: string;

  @Column('bigint', { unique: false, nullable: false })
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.article)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.article)
  comments: CommentEntity;
}
