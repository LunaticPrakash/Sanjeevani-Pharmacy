from pydantic import BaseModel, Field, PositiveFloat
from datetime import date, datetime

class MedicineBase(BaseModel):
    name:str = Field(..., title="Name", description="Name of the Medicine", max_length=100)