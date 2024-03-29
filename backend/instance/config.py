import os


class Config:
    db_url = os.environ.get('POSTGRES_COPY_URL_TEST')
    flask_env = os.environ.get('VERCEL_ENV')
