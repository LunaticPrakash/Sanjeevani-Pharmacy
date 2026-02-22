from fastapi import APIRouter, Depends
from app.models.medicine import Medicine
from app.schemas.medicine import MedicineCreate, MedicineResponse
from app.schemas.api_response import APIResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.database.session import get_db
from app.services.medicine_service import MedicineService

router = APIRouter(prefix="/medicines", tags=["Medicines"])

def get_service(db: AsyncSession = Depends(get_db)) -> MedicineService:
    return MedicineService(db)

@router.post("/")
async def create_medicine(medicine: MedicineCreate, service:MedicineService = Depends(get_service)):
    result = await service.create_medicine(medicine)
    return APIResponse(success=True, data=result, error=None)

@router.get("/{medicine_id}")
async def get_medicine(medicine_id:str, service:MedicineService = Depends(get_service)):
    result = await service.get_medicine(medicine_id)
    return APIResponse(success=True, data=result, error=None)

@router.get("/")
async def get_all_medicines(skip:int|None = 0, limit:int|None=None, service:MedicineService = Depends(get_service)):
    result = await service.get_all_medicines()
    return APIResponse(success=True, data=result, error=None)