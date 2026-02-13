from pydantic import BaseModel, Field, PositiveFloat, PositiveInt
from datetime import date, datetime


class MedicineBase(BaseModel):
    name: str = Field(..., max_length=100, title="Name",
                      description="Name of the Medicine",
                      examples=["Paracetamol 500mg", "Amoxicillin 250mg"])

    manufacturer: str = Field(..., max_length=100, title="Manufacturer",
                              description="Name of the Manufacturer",
                              examples=["Sun Pharma", "Cipla", "Dr. Reddy's"])

    batch_number: str = Field(..., max_length=100,
                              title="Batch Number", description="Batch Number",
                              examples=["BATCH2024001", "MFG-2024-JAN-001"])

    unit_price: float = Field(..., ge=0, title="Unit Price",
                              description="Price per unit",
                              examples=[10.50, 25.00, 150.75])

    mrp: PositiveFloat = Field(..., title="MRP",
                               description="Maximum Retail Price",
                               examples=[15.00, 30.00, 200.80])


class MedicineCreate(MedicineBase):

    expiry_date: date = Field(...,
                              title="Expiry Date",
                              description="Expiry date (DD-MON-YYYY)",
                              examples=["02-Feb-2026", "21-Sep-2026"])

    stock_quantity: int = Field(..., ge=0,
                                        title="Stock Quantity",
                                        description="Stock Quantity",
                                        examples=[100, 50, 95])

    is_active: bool = Field(default=True,
                            title="Is Active",
                            description="Is Medicine Active for use",
                            examples=[True, False])


class MedicineResponse(MedicineBase):
    id: str
    expiry_date: date
    stock_quantity: int
    is_active: bool
    
    class Config:
        from_attributes = True  # Allows converting SQLAlchemy model to Pydantic