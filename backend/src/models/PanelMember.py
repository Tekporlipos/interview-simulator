import uuid

from sqlalchemy.orm import relationship

from app import db
from sqlalchemy import Column, String, ForeignKey, DateTime, func


class PanelMember(db.Model):
    __tablename__ = 'panel_members'

    id = Column(String(36), primary_key=True, default=str(uuid.uuid4()))
    description = Column(String(255), nullable=True)
    email = Column(String(255), nullable=True)
    expertise = Column(String(255), nullable=True)
    name = Column(String(255))
    profile = Column(String(255), nullable=True)

    # Define the relationship with EmailMessage
    email_message_id = Column(String(36), ForeignKey('email_message.id'))
    email_message = relationship("EmailMessage", back_populates="panelMembers")
    created_at = Column(DateTime, default=func.current_timestamp())
    updated_at = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'email': self.email,
            'expertise': self.expertise,
            'name': self.name,
            'profile': self.profile,
            'email_message_id': self.email_message_id,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

    def __repr__(self):
        return f"<PanelMember(id={self.id}, name={self.name}, email={self.email}, expertise={self.expertise}, profile={self.profile})>"
