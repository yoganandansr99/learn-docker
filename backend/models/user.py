from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    name: str
    education: str
    college: str
    location: str

class UserResponse(BaseModel):
    id: str
    name: str
    education: str
    college: str
    location: str
    
    class Config:
        from_attributes = True
