from fastapi import APIRouter, HTTPException
from bson import ObjectId
from config.database import get_users_collection
from models.user import User, UserResponse

router = APIRouter()

@router.post("/users", response_model=UserResponse)
async def create_user(user: User):
    users_collection = get_users_collection()
    user_dict = user.model_dump()
    result = users_collection.insert_one(user_dict)
    
    return UserResponse(
        id=str(result.inserted_id),
        name=user.name,
        education=user.education,
        college=user.college,
        location=user.location
    )

@router.get("/users", response_model=list[UserResponse])
async def get_users():
    users_collection = get_users_collection()
    users = []
    
    for user in users_collection.find():
        users.append(UserResponse(
            id=str(user["_id"]),
            name=user["name"],
            education=user["education"],
            college=user["college"],
            location=user["location"]
        ))
    
    return users

@router.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: str):
    users_collection = get_users_collection()
    
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID")
    
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserResponse(
        id=str(user["_id"]),
        name=user["name"],
        education=user["education"],
        college=user["college"],
        location=user["location"]
    )

@router.delete("/users/{user_id}")
async def delete_user(user_id: str):
    users_collection = get_users_collection()
    
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID")
    
    result = users_collection.delete_one({"_id": ObjectId(user_id)})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {"message": "User deleted successfully"}
