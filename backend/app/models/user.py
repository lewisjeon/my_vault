from sqlalchemy import Column, Integer, String
from app.db import Base

# class User(Base):
#     __tablename__ = "users"
#     id = Column(Integer, primary_key=True)
#     username = Column(String, unique=True)
#     email = Column(String, unique=True)
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String)
