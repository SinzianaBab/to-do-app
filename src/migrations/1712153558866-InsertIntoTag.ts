import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTags1712059274725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(
      `INSERT INTO tag_entity(name) VALUES ('Home'), ('Work'), ('Cooking'), ('Programming')`,
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM tag_entity WHERE name IN ('Home', 'Work', 'Cooking', 'Programming')`,
    );
  }
}
