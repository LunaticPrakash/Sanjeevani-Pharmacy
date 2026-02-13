from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Column, DateTime, func

class Base(DeclarativeBase):
    
    # common fields
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())