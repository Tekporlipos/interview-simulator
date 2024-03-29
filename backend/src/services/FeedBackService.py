from datetime import datetime

from src.utils.responseEntity import error_response, success_response


class FeedBackService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(FeedBackService, cls).__new__(cls)
        return cls._instance

    def create_feedback(self, db, userFeedback, data, logger):
        try:
            submission_date = datetime.fromtimestamp(data.get('submissionDate', 0) / 1000)
            feedback = userFeedback(
                submission_date=submission_date,
                message=data.get('message'),
                user_id=data.get('userId', '')
            )
            db.session.add(feedback)
            db.session.commit()
            return success_response("Feedback created successfully", feedback.to_dict(),
                                    status_code=201, logger=logger, logger_type="info")
        except Exception as e:
            db.session.rollback()
            return error_response(str(e), status_code=500, logger=logger, logger_type="error")
