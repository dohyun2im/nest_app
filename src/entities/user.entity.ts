import { Entity, Column, OneToMany } from 'typeorm';
import { CommonPKEntity } from './common.entity';
import { ArticleEntity } from './article.entity';
import { CommentEntity } from './comment.entity';

@Entity('User')
export class UserEntity extends CommonPKEntity {
  @Column('varchar', { unique: true, nullable: false })
  email: string;

  @Column('varchar', { unique: false, nullable: false })
  password: string;

  @OneToMany(() => ArticleEntity, (article) => article.user)
  article: ArticleEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity;
}
