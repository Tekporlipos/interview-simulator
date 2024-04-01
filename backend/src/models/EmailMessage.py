import uuid
from sqlalchemy import Column, String, DateTime, func
from sqlalchemy.orm import relationship

from app import db


class EmailMessage(db.Model):
    __tablename__ = 'email_message'

    id = Column(String(36), primary_key=True, default=str(uuid.uuid4()))
    date = Column(DateTime, default=func.current_timestamp())
    description = Column(String(2000), nullable=True)
    full_name = Column(String(255))
    interview_id = Column(String(255))
    position = Column(String(255))
    recipient = Column(String(255), nullable=True)
    created_at = Column(DateTime, default=func.current_timestamp())
    updated_at = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())

    panelMembers = relationship("PanelMember", back_populates="email_message")

    def to_dict(self):
        panel_members_data = [panel_member.to_dict() for panel_member in self.panelMembers]

        return {
            'id': self.id,
            'date': self.date.isoformat(),
            'description': self.description,
            'full_name': self.full_name,
            'interview_id': self.interview_id,
            'position': self.position,
            'recipient': self.recipient,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat(),
            'panelMembers': panel_members_data,
        }

    def __repr__(self):
        return f"<EmailMessage(id={self.id}, date={self.date}, full_name={self.full_name}, " \
               f"interview_id={self.interview_id}, position={self.position}, " \
               f"recipient={self.recipient})>"
