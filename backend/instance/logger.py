import logging
import sys
from logging.handlers import RotatingFileHandler


def setup_logging(app):
    log_formatter = logging.Formatter('%(asctime)s [%(levelname)s] %(message)s')
    log_handler = RotatingFileHandler('storage/log/simulator-backend.log', maxBytes=10000, backupCount=1)
    log_handler.setFormatter(log_formatter)
    app.logger.addHandler(log_handler)
    app.logger.setLevel(logging.DEBUG)

    app.config['PROPAGATE_EXCEPTIONS'] = True
