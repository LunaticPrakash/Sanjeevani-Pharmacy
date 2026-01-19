from .base import Base
from sqlalchemy import Column, Integer, String, Float, Boolean, Date, DateTime, func
import uuid

class Medicine(Base):

    __tablename__ = "medicines"

    id = Column(String(36), primary_key=True, default=str(uuid.uuid4()), index=True)
    name = Column(String(100), nullable=False, index=True)
    manufacturer = Column(String(100), nullable=False, index=True)
    batch_number = Column(String(100), nullable=False, unique=True)
    expiry_date = Column(Date, nullable=False)
    stock_quantity = Column(Integer, default=0)
    unit_price = Column(Float, nullable=False)
    mrp = Column(Float, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())
    