import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EmailMessage } from './email-message.entity';

@Entity('panel_members')
export class PanelMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  expertise: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profile: string;

  @ManyToOne(() => EmailMessage, (emailMessage) => emailMessage.panelMembers)
  emailMessage: EmailMessage;
}
