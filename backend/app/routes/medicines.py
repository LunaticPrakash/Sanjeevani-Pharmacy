from fastapi import APIRouter, Depends
from app.models.medicine import Medicine
from app.schemas.medicine import MedicineCreate, MedicineResponse
from app.schemas.api_response import APIResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.database.session import get_db

router = APIRouter(prefix="/medicines", tags=["Medicines"])

@router.post("/")
async def create_medicine(medicine: MedicineCreate, db: AsyncSession = Depends(get_db)):
    db_medicine = Medicine(**medicine.model_dump())
    db.add(db_medicine)
    await db.commit()
    await db.refresh(db_medicine)

    medicine_response = MedicineResponse.model_validate(db_medicine)
    return APIResponse(success=True, data=medicine_response, error=None)