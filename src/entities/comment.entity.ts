import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CommonPKEntity } from './common.entity';
import { UserEntity } from './user.entity';
import { ArticleEntity } from './article.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity('Comment')
export class CommentEntity extends CommonPKEntity {
  @ApiProperty({
    example: '댓글 내용입니다.',
    description: '댓글 제목',
    required: true,
  })
  @IsString()
  @Column('text', { unique: false, nullable: false })
  content: string;

  @ApiProperty({
    example: 'parentId',
    description: 'parentId',
    required: false,
  })
  @IsInt()
  @Column('bigint', { unique: false, nullable: true })
  parentId: string | null;

  @ApiProperty({
    example: 'userId',
    description: 'userId',
    required: true,
  })
  @IsInt()
  @Column('bigint', { unique: false, nullable: false })
  userId: string;

  @ApiProperty({
    example: 'articleId',
    description: 'articleId',
    required: true,
  })
  @IsInt()
  @Column('bigint', { unique: false, nullable: false })
  articleId: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;

  @ManyToOne(() => ArticleEntity, (article) => article.comments)
  @JoinColumn({ name: 'articleId', referencedColumnName: 'id' })
  article: ArticleEntity;
}
