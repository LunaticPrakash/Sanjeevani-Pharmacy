from sqlalchemy.ext.asyncio import AsyncSession
from app.repositories.medicine_repository import MedicineRepository
from app.schemas.medicine import MedicineCreate, MedicineResponse


class MedicineService:
    """Handles business logic for Medicine operations"""
    
    def __init__(self, db: AsyncSession):
        self.repository = MedicineRepository(db)
    
    async def create_medicine(self, medicine: MedicineCreate) -> MedicineResponse:
        medicine_data = medicine.model_dump()
        db_medicine = await self.repository.create(medicine_data)
        return MedicineResponse.model_validate(db_medicine)
    
    async def get_medicine(self, medicine_id: str) -> MedicineResponse | None:
        db_medicine = await self.repository.get_by_id(medicine_id)
        if not db_medicine:
            return None
        return MedicineResponse.model_validate(db_medicine)
    
    async def get_all_medicines(self, skip: int = 0, limit: int = None) -> list [MedicineResponse] | None:
        db_medicines = await self.repository.get_all(skip, limit)
        return [MedicineResponse.model_validate(med) for med in db_medicines]
    
    async def delete_medicine(self, medicine_id: str) -> bool:
        return await self.repository.delete(medicine_id)
