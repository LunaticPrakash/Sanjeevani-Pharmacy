from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.utils.logger import logger
from app.config.config import app_config
from app.database.session import engine 
from sqlalchemy import text
from app.schemas.Medicine import MedicineBase

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Application starts from here
    logger.info(f"Starting {app_config.APP_NAME} app with {app_config.ENV_NAME} environment configurations...")
    try:
        async with engine.connect() as connection:
            await connection.execute(text("SELECT 1"))
            logger.info(f"{engine.url.database} database connection successfully established.")
    except Exception as e:
        logger.critical(f"Database Connection failed. ERROR Message: {e}")
    yield  # Application stays running here

    # Application will stop afterwards
    logger.info("Shutting down application...")
    await engine.dispose()
    logger.info("Database connection successfully closed.")

app = FastAPI(
    title=app_config.APP_NAME,
    lifespan=lifespan
)


@app.get("/")
def home():
    return {"message": "Sanjeevani App is Running", "env": app_config.ENV_NAME}

@app.get("/med")
def med(med: MedicineBase):
    return med