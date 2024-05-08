import json

from flask import request
from sqlalchemy.orm.attributes import flag_modified

from app import app, db,cache
from src.models.InterviewSection import InterviewSection
from src.services.InterviewSectionService import InterviewSectionService
from src.utils.httpMethod import HttpMethod

interview_section_service = InterviewSectionService()


@app.route('/api/v1/interview-section/<interview_id>', methods=['GET'])
def get_interview_section_by_id(interview_id):
    cache_key = f'interview_{interview_id}'
    cached_data = cache.get(cache_key)
    if cached_data is None:
        cached_data = interview_section_service.get_interview_section_by_id(db, InterviewSection, interview_id, app.logger)
        cache.set(cache_key, cached_data, timeout=1000 * 60 * 30)
    return cached_data


@app.route('/api/v1/interview-section/<interview_id>', methods=[HttpMethod.PATCH])
def update_interview_section(interview_id):
    return interview_section_service.update_interview_section(db, flag_modified, InterviewSection, interview_id,
                                                              request.json,
                                                              json, app.logger)
