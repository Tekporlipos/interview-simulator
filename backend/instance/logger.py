import logging
import sys


def setup_logging(app):
    log_formatter = logging.Formatter('%(asctime)s [%(levelname)s] %(message)s')
    log_handler = logging.StreamHandler(sys.stdout)
    log_handler.setFormatter(log_formatter)
    app.logger.addHandler(log_handler)

    app.config['PROPAGATE_EXCEPTIONS'] = True
