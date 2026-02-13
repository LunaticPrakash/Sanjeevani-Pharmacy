from fastapi import APIRouter
from . import medicines

app_router = APIRouter()

app_router.include_router(medicines.router)