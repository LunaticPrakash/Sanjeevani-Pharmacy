from pydantic_settings import BaseSettings
import os
from app.utils.logger import logger

class BaseConfig(BaseSettings):
    APP_NAME: str
    ENV_NAME: str
    MYSQL_USER: str
    MYSQL_PASSWORD: str
    MYSQL_SERVER: str
    MYSQL_PORT: int
    MYSQL_DB_NAME: str
        
    @property
    def MYSQL_DB_URL(self) -> str:
        return f"mysql+aiomysql://{self.MYSQL_USER}:{self.MYSQL_PASSWORD}@{self.MYSQL_SERVER}:{self.MYSQL_PORT}/{self.MYSQL_DB_NAME}"

class DEVConfig(BaseConfig):

    class Config:
        env_file = ".env.dev"

class QAConfig(BaseConfig):

    class Config:
        env_file = ".env.qa"

class PRODConfig(BaseConfig):

    class Config:
        env_file = ".env.prod"
  
def get_config(env_name: str):
    if env_name == "PROD":
        return PRODConfig()
    elif env_name == "QA":
        return QAConfig()
    else:
        return DEVConfig()

curr_env_name = os.getenv('ENV_NAME', 'DEV')
app_config = get_config(curr_env_name)