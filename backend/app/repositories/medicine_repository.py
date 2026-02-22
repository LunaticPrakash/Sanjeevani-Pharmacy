from .base_repository import BaseRepository
from app.models.medicine import Medicine
from sqlalchemy.ext.asyncio import AsyncSession

class MedicineRepository(BaseRepository[Medicine]):

    def __init__(self, db:AsyncSession):
        super().__init__(Medicine, db)

