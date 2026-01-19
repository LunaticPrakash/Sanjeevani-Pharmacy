from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from app.config.config import app_config

# 1. CREATE ENGINE
# pool_pre_ping=True: The "Heartbeat" check. It pings the DB before every query 
# to ensure the connection hasn't gone stale. Crucial for production.
engine = create_async_engine(
    app_config.MYSQL_DB_URL,
    echo=False,  # Set to False in production to reduce log noise
    pool_pre_ping=True,
    pool_size=10, # Maintain 10 open connections ready to go
    max_overflow=20 # Allow 20 more if traffic spikes
)

# 2. SESSION FACTORY
# This creates the actual "handle" we use to talk to the DB.
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    autoflush=False,
    expire_on_commit=False,
)

# 3. DEPENDENCY INJECTION (For CRUD)
# Usage in routes: async def get_user(db: AsyncSession = Depends(get_db)):
async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()