import os


class Config:
    db_url = os.environ.get('POSTGRES_COPY_URL_TEST') if os.environ.get(
        'VERCEL_ENV') == "development" else os.environ.get('POSTGRES_COPY_URL')
    flask_env = os.environ.get('VERCEL_ENV')
