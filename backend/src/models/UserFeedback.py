import uuid
from app import db
from sqlalchemy import Column, String, DateTime, func


class UserFeedback(db.Model):
    __tablename__ = 'user_feedback'
    id = Column(String(36), primary_key=True, default=str(uuid.uuid4()))
    created_at = Column(DateTime, default=func.current_timestamp())
    message = Column(String(5000))
    submission_date = Column(DateTime, default=func.current_timestamp())
    updated_at = Column(DateTime, default=func.current_timestamp(), onupdate=func.current_timestamp())
    user_id = Column(String(36), nullable=True)


    def __repr__(self):
        return f"<UserFeedback(id={self.id}, message={self.message}, submission_date={self.submission_date}, " \
               f"user_id={self.user_id})>"
