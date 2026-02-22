from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import TypeVar, Generic

# Generic type for any SQLAlchemy model
ModelType = TypeVar("ModelType")


class BaseRepository(Generic[ModelType]):
    """Generic repository with common CRUD operations"""

    def __init__(self, model: type[ModelType], db: AsyncSession):
        self.model = model
        self.db = db

    async def create(self, data: dict) -> ModelType:
        instance = self.model(**data)
        self.db.add(instance)
        await self.db.commit()
        await self.db.refresh(instance)
        return instance

    async def get_by_id(self, id: str) -> ModelType | None:
        result = await self.db.execute(
            select(self.model).where(self.model.id == id)
        )
        return result.scalar_one_or_none()

    async def get_all(self, skip: int = 0, limit: int | None = None) -> list[ModelType] | None:
        query = select(self.model).offset(skip)
        if limit is not None:
            query = query.limit(limit)
        result = await self.db.execute(query)
        return result.scalars().all()

    async def update(self, id: str, data: dict) -> ModelType | None:
        instance = await self.get_by_id(id)
        if not instance:
            return None

        for key, value in data.items():
            setattr(instance, key, value)

        await self.db.commit()
        await self.db.refresh(instance)
        return instance

    async def delete(self, id: str) -> bool:
        instance = await self.get_by_id(id)
        if not instance:
            return False

        await self.db.delete(instance)
        await self.db.commit()
        return True
