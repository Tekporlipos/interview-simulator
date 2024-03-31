import uuid
import json

from sqlalchemy.dialects.postgresql import JSONB

from app import db
from sqlalchemy import Column, String, DateTime, func, ForeignKey

from src.services.ChatAIService import get_history_data


class InterviewSection(db.Model):
    __tablename__ = 'interview_sections'
    id = Column(String(36), primary_key=True, default=str(uuid.uuid4()))
    interview_id = Column(String(36), ForeignKey('email_message.id'), unique=True)
    created_at = Column(DateTime, default=func.current_timestamp())
    updated_at = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    data = Column(JSONB, nullable=False)

    def __init__(self, interview_id, data):
        self.interview_id = interview_id
        self.data = json.dumps(data) if data else None

    def to_json(self):
        return {
            'id': self.id,
            'interview_id': self.interview_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'data': get_history_data(self, json) if self.data else None
        }

    def __repr__(self):
        return f"<InterviewSection(id={self.id}, interview_id={self.interview_id}, " \
               f"created_at={self.created_at}, updated_at={self.updated_at}, " \
               f"data={self.data})>"
