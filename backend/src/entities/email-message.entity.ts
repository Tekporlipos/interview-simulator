import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PanelMember } from './panel-member.entity';

@Entity('email_message')
export class EmailMessage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'varchar', length: 2000, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  full_name: string;

  @Column({ type: 'varchar', length: 255 })
  interview_id: string;

  @Column({ type: 'varchar', length: 255 })
  position: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  recipient: string;

  @OneToMany(() => PanelMember, (panelMember) => panelMember.emailMessage)
  panelMembers: PanelMember[];
}
