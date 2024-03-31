from src.services.ChatAIService import get_history_data
from src.utils.helpers import to_kebab_case
from src.utils.responseEntity import error_response, success_response


class InterviewSectionService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(InterviewSectionService, cls).__new__(cls)
        return cls._instance

    def update_interview_section(self, db, flag_modified, interview_section, interview_id, data, json, logger):
        try:
            interview_section = interview_section.query.filter_by(interview_id=interview_id).first()
            print(interview_section)
            if interview_section is None or data['interview_type'] is None or data["messages"] is None:
                raise Exception("No interview section")
            else:
                temp = get_history_data(interview_section, json)
                temp[to_kebab_case(data['interview_type'])].extend(data["messages"])
                interview_section.data = temp

                # Commit changes to the database
                flag_modified(interview_section, "data")
                db.session.merge(interview_section)
                db.session.flush()
                db.session.commit()
                print(interview_section)
                return success_response("Interview section updated successfully", interview_section.to_json(),
                                        status_code=201, logger=logger, logger_type="info")
        except Exception as e:
            db.session.rollback()
            return error_response(str(e), status_code=500, logger=logger, logger_type="error")

    def get_interview_section_by_id(self, db, InterviewSection, interview_id, logger):
        try:
            interview_section_data = InterviewSection.query.filter_by(interview_id=interview_id).first()
            return success_response("Interview sections retrieved successfully", interview_section_data.to_json(),
                                    status_code=200, logger=logger, logger_type="info")
        except Exception as e:
            db.session.rollback()
            return error_response(str(e), status_code=500, logger=logger, logger_type="error")

